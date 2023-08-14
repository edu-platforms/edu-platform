import React from "react";
import { Link } from "react-router-dom";
import { schedule } from "@/assets";
import { Wrapper, Primary } from "@/UI";
import {useMedia} from "src/libs/hooks";
export default function ScheduleLesson({ text }) {
  const { isMobile } = useMedia();
  return (
    <Wrapper className="flex-items-center flex-col gap-y-5">
      <img src={schedule} alt="Schedule" />

      <h2>Schedule a Lesson</h2>

      <p className="text-center">{text}</p>

      <Link>
        <Primary htmlType="button" style={isMobile?{width:200}:{ width: 400 }}>
          Schedule lesson
        </Primary>
      </Link>
    </Wrapper>
  );
}
