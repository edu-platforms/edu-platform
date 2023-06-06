import React from "react";
import { Link } from "react-router-dom";
import { Lesson } from "@/UI";
import { LessonCard } from "@/components";
import {useMedia} from "@/hooks";

export default function Live() {
  const {isMobile} = useMedia();
  return (
    <div className="w-full">
      <LessonCard
        button={
          <Link to={"/"}>
            <Lesson className={isMobile ? "!px-2 !py-2" :""}>Enter lesson</Lesson>
          </Link>
        }
      />
    </div>
  );
}
