import { Sign } from '@/components'
import { Divider } from 'antd'
import { SetUpForm } from 'src/libs/modules'
import { apple, google, facebookLogo } from '@/assets'
import { useMedia } from 'src/libs/hooks'
import { useLogin } from 'react-facebook'
import { useGoogleLogin } from '@react-oauth/google'
import { useDispatch } from 'react-redux'
import { userLogin } from '@/libs/slices/authSlices'
import { getFacebookData, getGoogleData } from '@/libs/constants/providerSettings'

export default function SignIn() {
  const { login } = useLogin()
  const dispatch = useDispatch()
  const { isMobile } = useMedia()

  const authSignInGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      if (tokenResponse && tokenResponse.access_token) {
        const { email, google_id } = await getGoogleData(tokenResponse.access_token)
        dispatch(userLogin({ email, google_id }))
      }
    },
  })

  const authSignInFacebook = async () => {
    const { authResponse } = await login({
      scope: 'email',
    })
    const { email, facebook_id } = await getFacebookData(
      authResponse.userID,
      authResponse.accessToken
    )
    dispatch(userLogin({ email, facebook_id }))
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
