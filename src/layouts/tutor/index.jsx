import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "@/components";
import { tutorLinks } from "src/libs/constants";

export default function TutorLayout() {
  return (
    <>
      <Header links={tutorLinks} status="tutor"/>
      {
        <main>
          <Outlet />
        </main>
      }
      <Footer />
    </>
  );
}
