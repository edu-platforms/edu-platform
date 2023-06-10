import { Sign } from "@/components";
import { Divider } from "antd";
import { SetUpForm } from "src/libs/modules";
import { apple, google, facebookLogo } from "@/assets";
import { useMedia } from "src/libs/hooks";
import { useDispatch } from "react-redux";
import { userSignInGoogle } from "src/libs/store";

export default function SignIn() {
  const dispatch = useDispatch()
  const { isMobile } = useMedia();
  const authSignInGoogle = () => {
    dispatch(userSignInGoogle())
  }
  return (
    <Sign>
      {isMobile ? (
        <div className="sign-in-mobile-container">
          <SetUpForm />

          <Divider />

          <button className="sign-in-mobile-btn">Sign in with Google</button>
          <button className="sign-in-mobile-btn">Sign in with Facebook</button>
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
            <button>
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
  );
}
