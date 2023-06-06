import React from "react";
import { useDispatch } from "react-redux";
import { setPersonal } from "@/store";
import { PersonalForm } from "./Form";

export default function ConnectedForm({ prev, next }) {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    // values?.photo = 
    dispatch(setPersonal(values))
    next();
  };

  return <PersonalForm prev={prev} onFinish={onFinish} />;
}
