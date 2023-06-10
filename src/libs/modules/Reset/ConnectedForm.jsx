import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ResetForm } from "./Form.jsx";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, userResetPassword } from "../../store/index.js";
export default function ConnectedForm() {
  const {id} = useSelector(authSelector)
  const { pathname } = useLocation();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isForgot = pathname === "/forgot";

  const onFinish = (values) => {
    if (isForgot) {
      const option = {
        user_email:values?.email
      }
      dispatch(userResetPassword({option,navigate}))
    } else {
        if(id){
          
        }
    }
  };

  return <ResetForm isForgot={isForgot} onFinish={onFinish} />;
}
