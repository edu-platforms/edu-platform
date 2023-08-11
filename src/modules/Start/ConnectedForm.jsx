import { StartForm } from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../store";
import { userSignUp } from "../../store";
import { useNavigate } from "react-router-dom";

export default function ConnectedForm() {
  const { user } = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const next = () => navigate("/courses");

  const onFinish = (values) => {
    const option = {
      email: user.email,
      password: user.password,
      whom: user.whom,
      firstname: values.name,
      gender: values.gender,
      phone: values.phone,
    };
    // console.log("option", option);

    dispatch(userSignUp({ option, next }));
  };

  return <StartForm onFinish={onFinish} />;
}
