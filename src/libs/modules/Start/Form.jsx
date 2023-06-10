import { Form, Input, Select, Typography } from 'antd'
import { Primary } from '@/UI'
import { genderOptions } from '../../constants/options'

export const StartForm = ({ onFinish }) => {
  return (
    <Form layout='vertical' onFinish={onFinish} className='w-80'>
      <Form.Item
        name='name'
        label='Your firstname'
        rules={[
          {
            required: true,
            type: 'string',
          },
        ]}
      >
        <Input className='py-3 px-4 my-2' placeholder='Type your first name' />
      </Form.Item>
      <Form.Item
        name='gender'
        label='gender'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select options={genderOptions} />
      </Form.Item>{' '}
      <Form.Item
        name='phone'
        label='Your phone'
        rules={[
          {
            required: true,
            type: 'string',
          },
        ]}
      >
        <Input className='py-3 px-4 my-2' placeholder='Type your first name' />
      </Form.Item>
      <Typography className='text-gray-500 mt-2 mb-5'>
        Type your name in English characters will help tutors pronounce your
        name correctly
      </Typography>
      <Primary rounded block submit>
        Next
      </Primary>
    </Form>
  )
}
