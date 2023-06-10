import React, { useState } from "react";
import { Modal, Primary } from "@/UI";
import { DatePicker, Button, Form, Input, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { setExprience } from "src/libs/store";
export default function ExperienceModal({ close }) {
  const dispatch = useDispatch();
  const [until, setUntil] = useState(false);
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const handleFinishForm = (values) => {
    dispatch(setExprience(values?.experience));
    close();
  };

  const handleCancel = () => {
    form.resetFields();
    close();
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setUntil(!until);
  };

  return (
    <Modal className="!w-[600px]" onCancel={handleCancel}>
      <Form form={form} onFinish={handleFinishForm}>
        <h5 className="text-center mb-5">Add work exprience</h5>

        <Form.List name="experience" initialValue={[1]}>
          {(fields, { add, remove }) => (
            <Form.Item>
              {fields.map(({ key, name, ...restField }) => (
                <div key={key} className="border-gray-200 border-b mb-5">
                  <div className="w-full flex items-start gap-x-4">
                    <Form.Item
                      name={[name, "experience_title"]}
                      rules={[
                        { required: true, message: "Please enter your job!" },
                      ]}
                      className="w-full"
                      {...restField}
                    >
                      <Input className="p-2" placeholder="Title" />
                    </Form.Item>
                  </div>
                  <div className="w-full flex items-start gap-x-4">
                    <Form.Item
                      name={[name, "experience_descr"]}
                      rules={[{ required: false }]}
                      className="w-full"
                      {...restField}
                    >
                      <TextArea
                        className="p-2 py-4"
                        placeholder="Description"
                      />
                    </Form.Item>
                  </div>

                  <div className="w-full grid grid-cols-3 items-center">
                    <Form.Item
                      className="w-full"
                      name={[name, "experience_from"]}
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
                      name={[name, "experience_to"]}
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
                Add experience
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
