import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMedia, useSteps } from 'src/libs/hooks'
import { authSelector, setType } from 'src/libs/store'
import { steps } from 'src/libs/constants'
import { Sign } from '@/components'
import { Steps, Divider } from 'antd'
import { SetUpForm, StartUpForm } from 'src/libs/modules'
import { apple, google, arrowBack, facebookLogo } from '@/assets'
import { useGoogleLogin } from '@react-oauth/google'
import { useLogin } from 'react-facebook'
import { userSignUp } from '../../../libs/store'
import { google_url, facebook_url } from '@/libs/constants/providerSettings'
import axios from 'axios'
export default function SignUp() {
  const { login } = useLogin()
  const dispatch = useDispatch()
  const { user } = useSelector(authSelector)
  const { next, prev, current } = useSteps()
  const { isMobile } = useMedia()
  const handleChoose = (type) => {
    dispatch(setType(type))
    next()
  }

  const authSignUpGoogle = useGoogleLogin({
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
            firstname: data.given_name,
            whom: user.whom,
          }
          dispatch(userSignUp(option))
        }
      }
    },
  })

  const authSignUpFacebook = async () => {
    try {
      const { authResponse } = await login({
        scope: 'email',
      })

      const { data } = await axios.get(
        `${facebook_url}/${authResponse.userID}?fields=name,email&access_token=${authResponse.accessToken}`
      )
      const option = {
        email: data.email,
        facebook_id: authResponse.userID,
        firstname: data.name,
        whom: user.whom,
      }
      dispatch(userSignUp(option))
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <Sign>
      <div className={`sign-up-container ${isMobile ? 'px-4' : ''}`}>
        <button
          className={current === 0 ? 'hidden' : 'absolute left-10 top-[5%]'}
          onClick={() => prev()}
        >
          <img src={arrowBack} alt="Back" />
        </button>

        <Steps labelPlacement="vertical" current={current} items={steps} />

        <div className="flex-items-center flex-col mt-5">
          {current === 0 ? (
            <Fragment>
              <h2 className="sign-up-title">Who will be learning English on edu-platform?</h2>

              <div
                className={`w-full flex-center gap-x-5 mt-10 ${
                  isMobile ? 'flex-wrap gap-y-5 justify-center' : ''
                }`}
              >
                <button
                  className={`sign-up-btn ${isMobile ? 'w-11/12' : ''}`}
                  onClick={() => handleChoose('Kid')}
                >
                  Kid
                </button>

                <button
                  className={`sign-up-btn ${isMobile ? 'w-11/12' : ''}`}
                  onClick={() => handleChoose('adult')}
                >
                  adult
                </button>
              </div>
            </Fragment>
          ) : current === 1 ? (
            <Fragment>
              <h2 className="sign-up-title">How would you like to log in?</h2>

              <div className="flex-center gap-x-16">
                <button onClick={authSignUpGoogle}>
                  <img src={google} alt="Google" />
                </button>
                <button onClick={authSignUpFacebook}>
                  <img src={facebookLogo} alt="Facebook" />
                </button>
                <button>
                  <img src={apple} alt="Apple" />
                </button>
              </div>

              <Divider className="px-2">or</Divider>

              <SetUpForm next={next} />
            </Fragment>
          ) : current === 2 ? (
            <Fragment>
              <h2 className="sign-up-title">Almost there! What s your name?</h2>

              <StartUpForm next={next} />
            </Fragment>
          ) : null}
        </div>
      </div>
    </Sign>
  )
}
