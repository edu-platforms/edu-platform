import React from "react";
import { Form, Input, InputNumber } from "antd";
import { Primary } from "@/UI";

export const CodeForm = ({ onFinish }) => {
  return (
    <Form layout="vertical" onFinish={onFinish} className="w-80">
      <Form.Item
        name="otp"
        label="Enter the message"
        rules={[
          {
            required: true,
            type: "string",
          },
        ]}
      >
        <Input className="py-3 px-4 my-2" placeholder="enter message" />
      </Form.Item>

      <Primary rounded block submit>
        Next22
      </Primary>
    </Form>
  );
};
