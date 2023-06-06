import React from "react";
import { Upload } from "antd";
import { useState } from "react";
import { uploadFile } from "@/assets";
import { Modal } from "@/UI";

const { Dragger } = Upload;

export default function LibraryModal({ close }) {
  const [file, setFile] = useState([]);

  const handleCancel = () => {
    close();
    setFile([]);
  };

  const draggerProps = {
    name: "file",
    onChange(e) {
      setFile(e.file);
      console.log(file);
    },
  };

  return (
    <Modal onCancel={handleCancel}>
      <div className="h-[200px]">
        <Dragger {...draggerProps} maxCount={1}>
          <div className="flex-items-center flex-col">
            <img src={uploadFile} alt="Upload" />

            <p className="text-gray-400 mt-2">
              Drag and drop file here or browse to upload
            </p>
          </div>
        </Dragger>
      </div>
    </Modal>
  );
}
