import React from "react";
import { Select } from "antd";

export default function CustomSelect({ prefixIcon, isMobile, ...rest }) {
  return (
    <>
    {isMobile?(
      <div className="relative flex-center w-full">
      <img src={prefixIcon} className="prefix-icon -ml-2" />

      <Select className="ant-selector-rounded-full w-full" {...rest} />
    </div>
    ):(
        <div className="relative flex-center px-2">
      <img src={prefixIcon} className="prefix-icon" />

      <Select className="ant-selector-rounded-full" {...rest} />
    </div>
    )}
   </> 
  );
}
