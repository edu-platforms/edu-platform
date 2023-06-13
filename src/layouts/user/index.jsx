import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "@/components";
import { userLinks } from "src/libs/constants";

export default function UserLayout() {
  return (
    <>
      <Header links={userLinks} status="user" />
      <main>{<Outlet />}</main>
      {/* <Footer /> */}
    </>
  );
}
