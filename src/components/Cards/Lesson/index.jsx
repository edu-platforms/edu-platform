import React from "react";
import { Wrapper } from "@/UI";
import { Divider } from "antd";
import { day, chat, week, time, review, source } from "@/assets";
import { useMedia } from "@/hooks";

export default function LessonCard({ button, completed }) {
  
  const { isMobile } = useMedia();

  return (
    <>
      {isMobile ? (
        <Wrapper className="mb-5 px-3 !py-5">
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-x-2">
              <img
                className="dash-card-thumb w-14 h-14"
                src={"https://picsum.photos/id/237/200/300"}
                alt="Person"
              />
              <h3 className="font-bold">John Due</h3>
            </div>
            {button ? (
              button
            ) : (
              <div className="flex gap-x-1">
                <img src={week} alt="Week" />

                <p>Week 1 - Lesson 3</p>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex">
              <img src={day} alt="Day" />
              <p>Sun, 12 April</p>
            </div>
            <div className="flex">
              <img className="opacity-60 mr-1" src={time} alt="Time" />
              <p>12:00 AM - 12:30 AM</p>
            </div>
          </div>
          {completed ? (
            <>
              <Divider className="my-3"/>
              <div className="grid grid-cols-3">
                <button className="flex items-center justify-center">
                  <img src={review} alt="Review" className="w-5"/>
                  <p className="text-sm mt-1">Your review</p>
                </button>

                <button className="flex items-center justify-center">
                  <img src={chat} alt="Chat" className="w-5"/>
                  <p  className="text-sm mt-1">Open chat</p>
                </button>

                <button className="flex items-center justify-center">
                  <img src={source} alt="Source" className="w-5"/>
                  <p  className="text-sm mt-1">Source files</p>
                </button>
              </div>
                <p className="ml-auto opacity-60 italic text-sm text-end mt-4">
                  Completed at: <time>10.03.2023 12:32 AM</time>
                </p>
            </>
          ) : ("")}
        </Wrapper>
      )
        :
        (<Wrapper className="mb-5 md:px-5">
          <div className="dash-card py-1">
            <div className="xl:w-[10%] md:w-[12%]">
              <img
                className="dash-card-thumb"
                src={"https://picsum.photos/id/237/200/300"}
                alt="Person"
              />
            </div>

            <div className="w-[90%] flex justify-between py-1">
              <div className="dash-card-content">
                <h4>Saidalixon Sobirov</h4>

                <div className="flex-center gap-x-1">
                  <img src={day} alt="Day" />
                  <p>Sun, 12 April</p>

                  <img className="ml-10 opacity-60" src={time} alt="Time" />
                  <p>12:00 AM - 12:30 AM</p>
                </div>
              </div>

              {button ? (
                button
              ) : (
                <div className="flex-center self-start gap-x-1">
                  <img src={week} alt="Week" />

                  <p>Week 1 - Lesson 3</p>
                </div>
              )}
            </div>
          </div>

          {completed?(
            <>
            <Divider />

<div className="flex xl:flex-row md:flex-col">
  <div className="dash-actions">
  <button>
    <img src={review} alt="Review" />
    <p>Your review</p>
  </button>

  <button>
    <img src={chat} alt="Chat" />
    <p>Open chat</p>
  </button>

  <button>
    <img src={source} alt="Source" />
    <p>Source files</p>
  </button>
  </div>

  <p className="ml-auto opacity-60 italic text-sm">
    Completed at: <time>10.03.2023 12:32 AM</time>
  </p>
</div>
            </>
          ):""
          }
        </Wrapper>
        )}
    </>
  );
}
