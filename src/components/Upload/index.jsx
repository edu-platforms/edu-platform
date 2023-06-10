import React from "react";
import { Modal, Upload, message } from "antd";
import { useUpload } from "src/libs/hooks";
import { upload } from "@/assets";

export default function FileUpload({ fileLists, setFileList }) {
  const [messageApi, contextHolder] = message.useMessage();

  const {
    previewOpen,
    previewImage,
    previewTitle,
    beforeUpload,
    handleCancel,
    handlePreview,
  } = useUpload(messageApi);

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  return (
    <>
      {contextHolder}
      <Upload
        beforeUpload={beforeUpload}
        listType="picture-circle"
        onPreview={handlePreview}
        fileList={fileLists}
        onChange={handleChange}
        maxCount={1}
        accept="image/*"
      >
        {fileLists.length < 1 && <img src={upload} alt={previewTitle} />}
      </Upload>

      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt={previewTitle}
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
}
