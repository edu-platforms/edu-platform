import React from "react";
import { ProfileForm } from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { setProfile, authSelector } from "@/store";
import { teacherBecome } from "../../store";
export default function ConnectedForm({ prev, next }) {
  const dispatch = useDispatch();

  const { teacher} = useSelector(authSelector);


  const onFinish = (values) => {
    const options = {
      ...teacher,
      user_about:values.about
    }
    dispatch(teacherBecome(options))
    console.log(options);

    next();
  };

  return <ProfileForm onFinish={onFinish} prev={prev} />;
}
