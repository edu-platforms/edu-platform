import React from "react";
import { Form, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { Primary } from "@/UI/index.js";
import { EmailField, PasswordField } from "@/components/index.js";

export const ResetForm = ({ isForgot, onFinish }) => {
  return (
    <Form layout="vertical" onFinish={onFinish} className="mt-10">
      {isForgot ? (
        <EmailField />
      ) : (
        <>
         <EmailField />
          <PasswordField
            name="new_password"
            label="New password"
            placeholder="Enter new password"
          />

          <PasswordField
            name="repeat_password"
            label="Repeat password"
            placeholder="Repeat new password"
          />
        </>
      )}

      <Primary block submit rounded className="my-3">
        {isForgot ? "Reset password" : "Save password"}
      </Primary>

      {isForgot ? (
        <Row justify="end">
          <Link to={"/sign-in"}>
            <Typography.Text strong>I already have an account</Typography.Text>
          </Link>
        </Row>
      ) : null}
    </Form>
  );
};
