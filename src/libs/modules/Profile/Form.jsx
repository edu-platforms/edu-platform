import React, { useContext, useState } from "react";
import { ModalContext } from "@/context/index.jsx";
import { Input, Form } from "antd";
import { EducationModal, ExperienceModal, CertificatesModal } from "@/components/index.js";
import { Wrapper, Primary, Back } from "@/UI/index.js";
export const ProfileForm = ({ onFinish, prev }) => {
  const { show, close } = useContext(ModalContext);
  const [modal, setModal] = useState(null);

  const handleOpenModal = (type) => {
    setModal(type);
    show();
  };

  return (
    <>
      <Form className="w-3/4" layout="vertical" onFinish={onFinish}>
        <Wrapper size="medium" className="flex-center flex-col mb-6">
          <h2>3.1 Teacher Introduction</h2>

          <Form.Item
            label="About me"
            name="about"
            className="w-full"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea className="w-full my-1" rows={5} />
          </Form.Item>

          <Form.Item
            label="Me as a teacher"
            name="me"
            className="w-full"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea className="w-full my-1" rows={5} />
          </Form.Item>
        </Wrapper>

        <Wrapper size="medium" className="flex-center flex-col p-10 mb-6">
          <h2>
            3.2 Professional Teaching Background{" "}
            <span className="italic">(optional)</span>
          </h2>

          <ul className="teacher-list">
            <li>
              <p>Education</p>

              <button type="button" onClick={() => handleOpenModal(1)}>
                + Add
              </button>
            </li>
            <li>
              <p>Work Exprience</p>

              <button type="button" onClick={() => handleOpenModal(2)}>
                + Add
              </button>
            </li>
            <li>
              <p>Certificates</p>

              <button type="button" onClick={() => handleOpenModal(3)}>
                + Add
              </button>
            </li>
          </ul>

          <div className="w-full flex-between mt-10">
            <Back onClick={prev} />

            <Primary submit rounded className="!w-[180px] !h-12">
              Submit
            </Primary>
          </div>
        </Wrapper>
      </Form>

      {modal === 1 ? <EducationModal close={close} /> 
      : modal ===2 ? <ExperienceModal close={close}/>
      : modal ===3 ? <CertificatesModal close={close}/> : null}
    </>
);
};
