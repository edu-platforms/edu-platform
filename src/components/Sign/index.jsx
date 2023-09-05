import React from "react";
import { useMedia } from "../../libs/hooks";
export default function Sign({ children }) {
  const {isMobile} = useMedia()
  return <div className={isMobile ? "sign_mobile" : "sign"}>{children}</div>;
}
