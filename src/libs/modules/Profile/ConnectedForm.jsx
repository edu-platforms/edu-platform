import React from "react";
import { ProfileForm } from "./Form.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setProfile, authSelector } from "@/libs/store/index.js";
import { teacherBecome } from "../../store/index.js";
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
