import { Form, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";
export default function Text() {
  return (
    <Form.Item
    className="sticky bottom-0 h-[60px] mb-0 relative"
    name="message"
    rules={[
        {
          required: true,
          type: "text",
        },
      ]}
    >
      <Input className="w-full h-[60px] border-none rounded-none"  placeholder="type message..." />
      <SendOutlined className="absolute right-10 top-5 cursor-pointer text-xl" />
    </Form.Item>
  );
}
