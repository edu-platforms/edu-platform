import React from "react";
import { Sign } from "@/components";
import { ResetForm } from "@/modules";

export default function Forgot() {
  return (
    <Sign>
      <div className="max-w-[500px] p-10 z-10">
        <h2 className="sign-title">edu-platform.uz</h2>
        <ResetForm />
      </div>
    </Sign>
  );
}
