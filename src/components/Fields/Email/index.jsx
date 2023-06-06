import { Form, Input } from "antd";

export const EmailField = () => {
  return (
    <Form.Item
      name="email"
      label="Email address"
      className="mb-3"
      rules={[
        {
          required: true,
          type: "email",
        },
      ]}
    >
      <Input className="py-3 px-4" placeholder="Enter your email" />
    </Form.Item>
  );
}
