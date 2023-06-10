import React from "react";
import { UploadOutlined } from '@ant-design/icons';
import { Modal, Primary } from "@/UI";
import { Button, Form, Input, Upload } from "antd";
import { useDispatch } from "react-redux";
import { setCertificates } from "src/libs/store";
export default function CertificatesModal({ close }) {
    const dispatch = useDispatch()
    const [form] = Form.useForm();

    const handleFinishForm = (values) => {
        console.log(values);
        dispatch(setCertificates(values?.certificate))
        close();
    };

    const handleCancel = () => {
        form.resetFields();
        close();
    };
    const normFile = (e) => {
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
      };
    return (
        <Modal className="!w-[600px]" onCancel={handleCancel}>
            <Form form={form} onFinish={handleFinishForm}>
                <h5 className="text-center mb-5">Add teaching certificate</h5>

                <Form.List name="certificate" initialValue={[{ id: 1 }]}>
                    {(fields, { add, remove }) => (
                        <Form.Item>
                            {fields.map(({ key, name, ...restField }) => (
                                <div key={key} className="border-gray-200 border-b mb-5">
                                    <div className="w-full flex items-start gap-x-4">
                                        <Form.Item
                                            name={[name, "certification_name"]}
                                            rules={[{ required: true, message: "Please enter your certification's name!" }]}
                                            className="w-2/3"
                                            {...restField}
                                        >
                                            <Input className="p-2" placeholder="Certification name" />
                                        </Form.Item>
                                        <Form.Item
                                            name={[name, "certification_file_id"]}
                                            rules={[{ required: false, message: 'Please select your file' }]}
                                            valuePropName="fileList"
                                            getValueFromEvent={normFile}
                                        >
                                            <Upload maxCount={1}>
                                                <Primary className="h-full" flex icon={<UploadOutlined />}>Click to Upload</Primary>
                                            </Upload>
                                        </Form.Item>
                                    </div>
                                    <div className="flex justify-end">
                                        <Button className="border-none text-[#D73604]" onClick={() => remove(name)}>
                                            Discard
                                        </Button>
                                    </div>
                                </div>
                            ))}

                            <Button className="w-32" onClick={() => add()}>
                                Add Certificate
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
