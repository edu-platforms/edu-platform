import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "@/components";
import { studentLinks } from "@/constants";

export default function Studentayout() {
  return (
    <>
      <Header links={studentLinks} status="student"/>
      {
        <main>
          <Outlet />
        </main>
      }
      <Footer />
    </>
  );
}
