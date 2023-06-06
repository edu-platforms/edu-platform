import React, { useState } from 'react';
import { ControlOutlined, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { FooterMobileMenu } from './Menu';

export const FooterMobile = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDragStart = () => {
    // setIsOpen(false);
    console.log('handleDragStart');
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    console.log('handleDragEnd');
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
    console.log('handleCloseMenu');
  };

  const open = () => {
    setIsOpen(true);
  }

  const close = () => {
    setIsOpen(false);
  }

  return (
    <>
      <FooterMobileMenu isOpen={isOpen} close={close} />
      <div className='bg-white flex shadow-sign justify-center items-center px-4 bottom-0 !fixed w-full left-0 h-[88px]'>
        <Input
          className='h-12'
          placeholder="Search"
          prefix={<SearchOutlined style={{ fontSize: '20px' }} />}
          suffix={<ControlOutlined onClick={open} style={{ fontSize: '20px' }} />}
        />
      </div>
    </>
  );
};