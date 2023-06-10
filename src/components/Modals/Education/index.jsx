import React, { useState } from "react";
import { Modal, Primary } from "@/UI";
import { Button, Form, Input, Select, Checkbox, DatePicker } from "antd";
import { useDispatch } from "react-redux";
import { setEducation } from "src/libs/store";

export default function EducationModal({ close }) {
  const [until, setUntil] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleFinishForm = (values) => {
    dispatch(setEducation(values?.education));
    close();
  };

  const handleCancel = () => {
    form.resetFields();
    close();
  };

  const onChange = (e) => {
    setUntil(!until);
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <Modal className="!w-[600px]" onCancel={handleCancel}>
      <Form form={form} onFinish={handleFinishForm}>
        <h5 className="text-center mb-5">Add education</h5>

        <Form.List name="education" initialValue={[{ id: 1 }]}>
          {(fields, { add, remove }) => (
            <Form.Item>
              {fields.map(({ key, name, ...restField }) => (
                <div key={key} className="border-gray-200 border-b mb-5">
                  <div className="w-full flex items-start gap-x-4">
                    <Form.Item
                      name={[name, "edu_univercity_name"]}
                      rules={[
                        {
                          required: true,
                          message: "Please enter your university!",
                        },
                      ]}
                      className="w-2/3"
                      {...restField}
                    >
                      <Input className="p-2" placeholder="University name" />
                    </Form.Item>

                    <Form.Item
                      name={[name, "degree"]}
                      // rules={[{ required: true }]}
                      className="w-1/3"
                      {...restField}
                    >
                      <Select />
                    </Form.Item>
                  </div>

                  <div className="w-full grid grid-cols-3 items-center">
                    <Form.Item
                      className="w-full"
                      name={[name, "edu_from"]}
                      rules={[
                        { required: true, message: "Please enter your date!" },
                      ]}
                      {...restField}
                    >
                      <DatePicker
                        placeholder="From date"
                        className="p-2 w-11/12"
                      />
                    </Form.Item>
                    <Form.Item
                      className="w-full"
                      name={[name, "edu_to"]}
                      rules={[{ required: false }]}
                      {...restField}
                    >
                      <DatePicker
                        placeholder="Until date"
                        className="p-2 w-11/12"
                        disabled={until}
                      />
                    </Form.Item>

                    <Form.Item>
                      <Checkbox className="w-28" onChange={onChange}>
                        until now
                      </Checkbox>
                    </Form.Item>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      className="border-none text-[#D73604]"
                      onClick={() => remove(name)}
                    >
                      Discard
                    </Button>
                  </div>
                </div>
              ))}

              <Button className="w-32 border-none" onClick={() => add()}>
                Add education
              </Button>
            </Form.Item>
          )}
        </Form.List>

        <div className="flex justify-end gap-x-4">
          <button
            type="button"
            className="text-green"
            onClick={() => handleCancel()}
          >
            Cancel
          </button>

          <Primary submit>Save</Primary>
        </div>
      </Form>
    </Modal>
  );
}
