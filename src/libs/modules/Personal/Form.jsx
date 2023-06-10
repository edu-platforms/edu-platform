import React, { useState } from "react";
import { Upload } from "@/components/index.js";
import { Back, Wrapper, Primary } from "@/UI/index.js";
import { Form, Input, Select, DatePicker } from "antd";
import {
  fromOptions,
  livingOptions,
  genderOptions,
  accentOptions,
} from "@/libs/constants/index.js";

export const PersonalForm = ({ prev, onFinish }) => {
  const { Item } = Form;
  const [fileList, setFileList] = useState([]);
console.log(fileList);
  const getFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <Form className="w-3/4 space-y-5" layout="vertical" onFinish={onFinish}>
      <Wrapper size="medium" className="flex-center flex-col gap-y-5">
        <h2>2.1 Basic Information</h2>

        <div className="w-full grid grid-cols-2 gap-x-5">
          <Item
            name="number"
            label="Display Number"
            rules={[
              {
                required: true,
                message: "Please enter your Number",
              },
            ]}
          >
            <Input size="large" />
          </Item>

          <Item name="accent" label="Accent" initialValue="british">
            <Select options={accentOptions} />
          </Item>

          <Item name="from" label="From" initialValue="usa">
            <Select options={fromOptions} />
          </Item>

          <Item name="living" label="Living In" initialValue="canada">
            <Select options={livingOptions} />
          </Item>
        </div>
      </Wrapper>

      <Wrapper size="medium" className="flex-center flex-col gap-y-5">
        <h2>2.2 Private Information</h2>

        <div className="grid grid-cols-2 gap-x-5 w-full">
          <Item
            name="first_name"
            label="First Name"
            rules={[
              {
                required: true,
                message: "Please enter your First Name",
              },
            ]}
          >
            <Input size="large" />
          </Item>

          <Item
            name="last_name"
            label="Last Name"
            rules={[
              {
                required: true,
                message: "Please enter your Last Name",
              },
            ]}
          >
            <Input size="large" />
          </Item>

          <Item name="birthday" label="Birthday">
            <DatePicker size="large" className="w-full" />
          </Item>

          <Item name="gender" label="Gender" initialValue={0}>
            <Select className="block w-full" options={genderOptions} />
          </Item>
        </div>
      </Wrapper>

      <Wrapper size="medium" className="flex-center flex-col gap-y-5">
        <h2>2.3 Profile photo</h2>

        <div className="flex gap-x-14">
          <Item
            name="photo"
            rules={[
              {
                required: true,
               
                validator: async () => {
                  if (!fileList.length) {
                    return Promise.reject("Please enter Photo");
                  }
                },
              },
            ]}
          >
            <Upload fileLists={fileList} setFileList={setFileList} />
          </Item>

          <div>
            <p>Edit Profile Photo</p>

            <ul className="ml-5 mt-3">
              <li className="list-disc">At least 250*250 pixels</li>
              <li className="list-disc">JPG, PNG and BMP formats only</li>
              <li className="list-disc">Maximum size of 2MB</li>
            </ul>
          </div>
        </div>

        <div className="w-full flex-between mt-10">
          <Back onClick={prev} />

          <Primary submit rounded className="!w-[180px] !h-12">
            Next
          </Primary>
        </div>
      </Wrapper>
    </Form>
  );
};
