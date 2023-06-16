import { Sign } from '@/components'
import { Divider } from 'antd'
import { SetUpForm } from 'src/libs/modules'
import { apple, google, facebookLogo } from '@/assets'
import { useMedia } from 'src/libs/hooks'
import { useLogin } from 'react-facebook'
import { useGoogleLogin } from '@react-oauth/google'
import { useDispatch } from 'react-redux'
import { userSignIn } from 'src/libs/store'
import { facebook_url, google_url } from '@/libs/constants/providerSettings'
import axios from 'axios'

export default function SignIn() {
  const { login } = useLogin()
  const dispatch = useDispatch()
  const { isMobile } = useMedia()

  const authSignInGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      if (tokenResponse && tokenResponse.access_token) {
        const { data } = await axios.get(google_url, {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        })
        if (data) {
          const option = {
            email: data.email,
            google_id: data.sub,
          }
          dispatch(userSignIn(option))
        }
      }
    },
  })

  const authSignInFacebook = async () => {
    const { authResponse } = await login({
      scope: 'email',
    })
    const { data } = await axios.get(
      `${facebook_url}/${authResponse.userID}?fields=name,email&access_token=${authResponse.accessToken}`
    )
    const option = {
      email: data.email,
      facebook_id: authResponse.userID,
    }
    dispatch(userSignIn(option))
  }

  return (
    <Sign>
      {isMobile ? (
        <div className="sign-in-mobile-container">
          <SetUpForm />

          <Divider />

          <button className="sign-in-mobile-btn" onClick={authSignInGoogle}>
            Sign in with Google
          </button>
          <button className="sign-in-mobile-btn" onClick={authSignInFacebook}>
            Sign in with Facebook
          </button>
          <button className="sign-in-mobile-btn">Sign in with Apple</button>
        </div>
      ) : (
        <div className="sign-in-container">
          <h2 className="sign-title">edu-platform.uz</h2>

          <p className="text-lg my-5">How would you like to sign in?</p>

          <div className="flex-center gap-x-16">
            <button onClick={authSignInGoogle}>
              <img src={google} alt="Google" />
            </button>
            <button onClick={authSignInFacebook}>
              <img src={facebookLogo} alt="Facebook" />
            </button>
            <button>
              <img src={apple} alt="Apple" />
            </button>
          </div>

          <Divider>or</Divider>

          <SetUpForm />
        </div>
      )}
    </Sign>
  )
}
