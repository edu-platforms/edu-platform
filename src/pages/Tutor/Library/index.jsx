import { useContext, useState } from "react";
import { Form, Input } from "antd";
import { files } from "src/libs/constants";
import { Wrapper, Primary } from "@/UI";
import { Files, LibraryModal } from "@/components";
import { plus, searchGray, arrowSort } from "@/assets";
import { ModalContext } from "@/context";

export default function Library() {
  const [value, setValue] = useState("");
  const { show, close } = useContext(ModalContext);

  return (
    <Wrapper size="medium" className="h-[600px]">
      <div className="flex-between">
        <div>
          <h3 className="text-2xl mb-1.5">My Saved Files</h3>

          <p className="text-gray-300">
            Store files to any teaching materials for quick access in the
            virtual classroom
          </p>
        </div>

        <Primary flex className="!max-w-[200px]" onClick={show}>
          <img src={plus} alt="Plus" />
          Add file
        </Primary>
      </div>

      <Form className="flex gap-x-5 mt-9 mb-5">
        <Form.Item className="w-full">
          <div className="flex gap-x-5">
            <div className="relative w-full h-[60px]">
              <img
                src={searchGray}
                className="absolute z-10 left-7 top-[50%] -translate-y-[50%]"
                alt="Search"
              />

              <Input
                onChange={({ target: { value } }) =>
                  setValue(value.toLowerCase())
                }
                placeholder="Search file"
                className="h-full border-gray text-lg placeholder:text-lg pl-16"
              />
            </div>
          </div>
        </Form.Item>

        <Primary flex className="!w-16 !h-[60px]">
          <img src={arrowSort} alt="Arrow" />
        </Primary>
      </Form>

      <div className="space-y-5">
        {files.map(
          (file) =>
            file.title.toLowerCase().includes(value) && (
              <Files key={file.id} file={file} />
            )
        )}
      </div>

      <LibraryModal close={close} />
    </Wrapper>
  );
}
