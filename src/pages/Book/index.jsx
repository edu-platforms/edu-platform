import React from "react";
import { Form, Select, Button, Typography } from "antd";

export default function Book() {
  return (
    <div className="h-screen flex-items-center">
      <div className="auth-wrapper">
        <h2 className="text-2xl text-center mb-2">Private 1:1 plan</h2>

        <Typography.Text type="secondary">
          Start learning English with a private tutor today!
        </Typography.Text>

        <Form layout="vertical">
          <Form.Item label="Select course">
            <Select defaultValue="disabled" style={{ width: "100%" }}>
              <Select.Option value="disabled" disabled>
                Disabled
              </Select.Option>
              <Select.Option value="jack">Jack</Select.Option>
              <Select.Option value="lucy">Lucy</Select.Option>

              <Select.Option value="Yiminghe">yiminghe</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Kuniga qancha vaqt">
            <Select
              defaultValue="30 minutes per day"
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </Form.Item>

          <Form.Item label="Haftasiga necha kun">
            <Select defaultValue="2 days per week" />
          </Form.Item>

          <Button
              type="primary"
              shape="round"
              loading={false}
              size="large"
              block
          >
            Select plan
          </Button>
        </Form>
      </div>
    </div>
  );
}
