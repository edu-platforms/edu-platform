import React from "react";
import { Tooltip, Badge, Avatar, Divider, Calendar, Pagination, Button, Row, Popover } from "antd";
import { BsShare, BsHeart, star, verified, arrowLeft, verticalDots } from "@/assets";
import { Primary, Wrapper } from "@/UI";
import { useMedia } from "../../../libs/hooks";
import { TutorMobile } from "./Mobile";

const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
}

export default function Details() {
  window.scrollTo(0, 0);

  const { isMobile } = useMedia();
  return (
    <>
      {isMobile ? <TutorMobile /> : (

        <div className="grid xl:grid-cols-3 md:grid-cols-1 gap-x-4">
          <div className="col-span-2 min-h-screen">
            <Wrapper className="mb-6">
              <div className="flex gap-x-8">
                <Badge className="relative">
                  <Avatar src={"https://picsum.photos/id/237/200/300"} size={110} />
                  <div className="absolute flex-items-center bg-white w-[20px] h-[20px] z-50 rounded-full right-1 bottom-3.5">
                    <span className="bg-green w-[14px] h-[14px] rounded-full" />
                  </div>
                </Badge>
                <div className="flex flex-col justify-between w-full">
                  <div className="w-full flex justify-between mb-5">
                    <h2>Teacher Darren</h2>
                    <div className="flex gap-x-6">
                      <Tooltip title="Share">
                        <button>
                          <BsShare size={18} />
                        </button>
                      </Tooltip>
                      <Tooltip title="Favourite">
                        <button>
                          <BsHeart size={18} />
                        </button>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="p-2 bg-gray-400 flex-center flex-col rounded-10">
                      <h2>British</h2>
                      <p className="text-gray-700">Accent</p>
                    </div>
                    <div className="p-2 bg-gray-400 flex-center flex-col rounded-10">
                      <h2>435</h2>
                      <p className="text-gray-700">Students</p>
                    </div>
                    <div className="p-2 bg-gray-400 flex-center flex-col rounded-10">
                      <h2>7,205</h2>
                      <p className="text-gray-700">Lessons</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-6">
                <li className="text-gray-800">From China</li>
                <li className="text-gray-800">Living in Seoul, Republic of Korea</li>
              </div>
              <div>
                <ul className="flex justify-between my-3">
                  <h2>About</h2>
                  <li className="text-gray-500">edu-platform teacher since May 18, 2021</li>
                </ul>
                <li>
                  All language. One world.<br></br>Hello everyone! I do speak Chinese, English, Japanese, and Korean, and plan to learn español. I really know how difficult to learn a foreign language, and would like to share the secret. Normally, I prefer to explain by using the easiest target words, but if you want to understand them better from your language, I can also explain in the language that makes you feel more comfortable. According to your level, I will adjust the speed and vocabs picking. Take you to an immersive environment without going to China, a more comfortable and interesting  as talking with a close friend.
                </li>
              </div>
            </Wrapper>
            <Wrapper className="flex justify-around mb-6">
              <ul className="text-center">
                <ul className="flex justify-center gap-2">
                  <img src={star} alt="Rating" />
                  <h2>4.9</h2>
                </ul>
                <li>Ratings</li>
              </ul>
              <ul className="text-center">
                <h2>4.9</h2>
                <li>Ratings</li>
              </ul>
              <ul className="text-center">
                <h2>4.9</h2>
                <li>Ratings</li>
              </ul>
              <ul className="text-center">
                <h2>4.9</h2>
                <li>Ratings</li>
              </ul>
            </Wrapper>
            <Wrapper className="mb-6">
              <h2 className="mb-3">Me as a teacher</h2>
              <p>I have been teaching for about 15 years, and one and a half years online. Several times I have been awarded for high student satisfaction. I have taught at all levels from beginner to advanced and even university preparation. I particularly enjoy grammar, but am able to assist in all aspects of language acquisition.</p>
            </Wrapper>
            <Wrapper className="mb-6">
              <h2>Resume <span className="italic">(optional)</span></h2>
              <div className="work-experience mt-5">
                <h3 className="font-semibold mb-2">Work experience</h3>
                <ul className="flex justify-between w-3/4 mb-4">
                  <li>2003-2007</li>
                  <ul>
                    <li>Lector Benedek Elek College</li>
                    <li>Benedek Elek College - Sopron, Hungary</li>
                  </ul>
                </ul>
                <ul className="flex justify-between w-3/4 mb-4">
                  <li>2003-2007</li>
                  <ul>
                    <li>Lector Benedek Elek College</li>
                    <li>Benedek Elek College - Sopron, Hungary</li>
                  </ul>
                </ul>
                <ul className="flex justify-between w-3/4 mb-4">
                  <li>2003-2007</li>
                  <ul>
                    <li>Lector Benedek Elek College</li>
                    <li>Benedek Elek College - Sopron, Hungary</li>
                  </ul>
                </ul>
              </div>
              <div className="education mt-5">
                <h3 className="font-semibold mb-2">Education</h3>
                <ul className="flex justify-between w-3/4 mb-4">
                  <li>2003-2007</li>
                  <ul>
                    <li>Lector Benedek Elek College</li>
                    <li>Benedek Elek College - Sopron, Hungary</li>
                  </ul>
                </ul>
                <ul className="flex justify-between w-3/4 mb-4">
                  <li>2003-2007</li>
                  <ul>
                    <li>Lector Benedek Elek College</li>
                    <li>Benedek Elek College - Sopron, Hungary</li>
                  </ul>
                </ul>
              </div>
            </Wrapper>
            <Wrapper className="mb-6">
              <h2 className="mb-3">Certificates <span className="italic">(optional)</span></h2>
              <div className="certificates mt-5">
                <h3 className="font-semibold mb-2">Education</h3>
                <ul className="flex justify-between w-3/4 mb-4">
                  <li>2003-2007</li>
                  <li className="flex justify-between">Teaching English as a Second Language TEFL
                    <span className="text-green-500 mx-3 flex items-center"><img src={verified} alt="logo" /> Verified</span>
                  </li>
                </ul>
                <ul className="flex justify-between w-3/4 mb-4">
                  <li>2003-2007</li>
                  <li className="flex">Teaching English as a Second Language TEFL
                    <span className="text-green-500 mx-3 flex items-center"><img src={verified} alt="logo" />Verified</span>
                  </li>
                </ul>
              </div>
            </Wrapper>
            <Wrapper className="mb-6">
              <h2 className="mb-3">Schedule</h2>
              <li className="my-3">Select a day</li>
              <div className="w-full border border-gray rounded-20 overflow-hidden">
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
              </div>
            </Wrapper>
            <Wrapper className="mb-6">
              <h2 className="mb-3">Reviews</h2>
              <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-5">
                <div className="rounded-10 bg-blue-50 border-2 border-gray-200 p-4">
                  <div className="w-3/4">
                    <div className="flex items-center mb-3">
                      <Avatar src={"https://picsum.photos/id/237/200/300"} size={60} />
                      <ul className="mx-3">
                        <h3 className="font-semibold">John Doe</h3>
                        <p>3 English lessons</p>
                      </ul>
                    </div>
                    <p>The interested warm up. Insist on learning more from Frank</p>
                    <p className="text-gray-500 my-2">Mar 8, 2023</p>
                  </div>
                </div>
                <div className="rounded-10 bg-blue-50 border-2 border-gray-200 p-4">
                  <div className="w-3/4">
                    <div className="flex items-center mb-3">
                      <Avatar src={"https://picsum.photos/id/237/200/300"} size={60} />
                      <ul className="mx-3">
                        <h3 className="font-semibold">John Doe</h3>
                        <p>3 English lessons</p>
                      </ul>
                    </div>
                    <p>The interested warm up. Insist on learning more from Frank</p>
                    <p className="text-gray-500 my-2">Mar 8, 2023</p>
                  </div>
                </div>
                <div className="rounded-10 bg-blue-50 border-2 border-gray-200 p-4">
                  <div className="w-3/4">
                    <div className="flex items-center mb-3">
                      <Avatar src={"https://picsum.photos/id/237/200/300"} size={60} />
                      <ul className="mx-3">
                        <h3 className="font-semibold">John Doe</h3>
                        <p>3 English lessons</p>
                      </ul>
                    </div>
                    <p>The interested warm up. Insist on learning more from Frank</p>
                    <p className="text-gray-500 my-2">Mar 8, 2023</p>
                  </div>
                </div>
                <div className="rounded-10 bg-blue-50 border-2 border-gray-200 p-4">
                  <div className="w-3/4">
                    <div className="flex items-center mb-3">
                      <Avatar src={"https://picsum.photos/id/237/200/300"} size={60} />
                      <ul className="mx-3">
                        <h3 className="font-semibold">John Doe</h3>
                        <p>3 English lessons</p>
                      </ul>
                    </div>
                    <p>The interested warm up. Insist on learning more from Frank</p>
                    <p className="text-gray-500 my-2">Mar 8, 2023</p>
                  </div>
                </div>
              </div>
              <Pagination className="w-full text-center mt-5" defaultCurrent={2} total={20} />
            </Wrapper>
          </div>
          <div className="col-span-1">
            <iframe 
              className="w-full rounded-20 h-52 mb-6"
              src="https://www.youtube.com/embed/zJ0WMaYHIoU" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen></iframe>
            <Wrapper className="mb-6">
              <h2>Trial lesson</h2>
              <p>One time, 15 minutes</p>
              <Divider className="opacity-50 my-3" />
              <ul className="flex flex-between">
                <li>Trial lesson</li>
                <li className="text-green">Free</li>
              </ul>
              <Primary htmlType="button" style={{ marginTop: "1rem" }}>
                Call
              </Primary>
            </Wrapper>
            <Wrapper className="mb-6">
              <h2>Private lesson</h2>
              <Divider className="opacity-50 my-3" />
              <Primary htmlType="button" style={{ marginBottom: "1rem" }}>
                Start Lesson
              </Primary>
              <Button
                block
                size="large"
                shape="round"
                type="primary"
                ghost
                htmlType="submit"
                className="bg-green !h-12"
              >
                Contact Lesson
              </Button>
            </Wrapper>
          </div>
        </div>
      )
      }
    </>
  );
}
