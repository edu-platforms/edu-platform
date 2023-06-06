import React from "react";
import { history } from "@/utils";
import { CodeForm } from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../store";
import { userOtp } from "../../store";

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
