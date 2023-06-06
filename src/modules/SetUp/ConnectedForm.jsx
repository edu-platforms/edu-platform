import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setLogin } from "@/store";
import { SetUpForm } from "./Form";
import { userSignIn } from "../../store";

export default function ConnectedForm({ next }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const isSignIn = pathname === "/sign-in";

  const onFinish = (values) => {
    if (isSignIn) {
      dispatch(userSignIn(values))
    } else {
      dispatch(setLogin(values));
      next();
    }
  };

  return <SetUpForm isSignIn={isSignIn} onFinish={onFinish} />;
}
