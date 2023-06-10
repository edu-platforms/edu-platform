import { passwordRegex } from "@/libs/utils/general";
import { Form, Input } from "antd";

export const PasswordField = ({ name, label, placeholder }) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[
        {
          required: true,
          pattern: passwordRegex,
          message: "Password must contain uppercase and lowercase letters and digits"
        }
      ]}
    >
      <Input.Password
        max={10}
        className="py-3 px-4"
        placeholder={placeholder}
      />
    </Form.Item>
  );
}
