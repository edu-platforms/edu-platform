import React from "react";
import { history } from "@/libs/utils/index.js";
import { StartForm } from "./Form.jsx";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../store/index.js";
import { userSignUp } from "../../store/index.js";
export default function ConnectedForm({next}) {
  const { user ,id} = useSelector(authSelector);
  const dispatch = useDispatch()
  

  const onFinish = (values) => {
    const option = {
      user_firstname:values.name,
      user_lastname:values.lastname,
      user_email:user.email,
      user_password:user.password,
      user_whom:user.type
    }
    dispatch(userSignUp({option,next}))
    
  };

  return <StartForm onFinish={onFinish} />;
}
