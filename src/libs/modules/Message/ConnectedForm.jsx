import React from "react";
import { history } from "@/libs/utils/index.js";
import { CodeForm } from "./Form.jsx";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../store/index.js";
import { userOtp } from "../../store/index.js";

export default function ConnectedForm() {
  const { id } = useSelector(authSelector);
  console.log(id);
  const dispatch = useDispatch()

  const onFinish = (values) => {
    const option = {
      id:id,
      otp:String(values.otp)
    }
    dispatch(userOtp(option))
  };

  return <CodeForm onFinish={onFinish} />;
}
