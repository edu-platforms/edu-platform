import React, { Fragment } from "react";
import { LessonCard } from "@/components";
import { ScheduleLesson } from "@/UI";
import { Divider } from "antd";

export default function Upcoming() {
  const course = true;
  const lesson_today = false;
  return (
    <Fragment>
      {course ? (
        <div className="w-full">
          <Divider>Today's lessons</Divider>
          {lesson_today ? (
            <>
              {[1, 2].map((id) => (
                <LessonCard key={id} />
              ))}
            </>
          ) : (
            <h3 className="text-center font-bold">No lessons scheduled for today</h3>
          )}

          <Divider>Upcoming events</Divider>
          {[1, 2, 3, 4].map((id) => (
            <LessonCard key={id} />
          ))}
        </div>
      ) : (
        <ScheduleLesson text="You have no scheduled lessons. Select a teacher to get started." />
      )}
    </Fragment>
  );
}
