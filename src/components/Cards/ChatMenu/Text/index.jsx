import { Form, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
export default function Text() {
  return (
    <Form.Item
      className=" bottom-0 h-[40px] mb-2 relative"
      name="name"
      rules={[
        {
          required: true,
          type: 'text',
        },
      ]}
    >
      <Input className="w-11/12 ml-3 my-2 mx-auto h-[40px]" placeholder="search..." />
      <SearchOutlined className="absolute  cursor-pointer text-xl right-5 top-4" />
    </Form.Item>
  )
}
