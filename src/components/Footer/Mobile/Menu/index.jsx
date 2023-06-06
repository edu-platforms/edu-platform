import React from "react";
import { Collapse } from "antd";
import { Primary } from '@/UI';

export const FooterMobileMenu = ({ close, isOpen }) => {

  const { Panel } = Collapse;

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
`;

  const onClick = () => {
    close()
  }

  return (
    <>
      {isOpen && <div onClick={close} className="h-full w-full bg-black fixed top-0 left-0 opacity-70"></div>}
      <div className={`${isOpen ? 'translate-y-0' : 'translate-y-full'} rounded-tl-2xl rounded-tr-2xl fixed flex flex-col justify-between items-center gap-4 w-full shadow-2xl bottom-0 left-0 z-50 h-[475px] overflow-y-scroll bg-white transition-all`}>
        <div className="flex flex-col w-full justify-start">
          <div onClick={onClick} className='sticky  rounded-tr-2xl rounded-tl-2xl flex top-0 bg-white w-full z-50 items-center justify-center'>
            <div className='h-[6px] w-20 my-3 z-50 rounded-full bg-[#ECEEF1]'></div>
          </div>
          <Collapse size='large' className='border-none bg-white w-full'>
            <Panel header="Language" key="1">
              <p>{text}</p>
            </Panel>
            <Panel header="Lesson Category" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="Lesson Time" key="3">
              <p>{text}</p>
            </Panel>
            <Panel header="Lesson Price" key="4">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>
        <Primary className='!rounded-[44px] w-[325px] mb-3'>Continue</Primary>
      </div>
    </>
  )
};
