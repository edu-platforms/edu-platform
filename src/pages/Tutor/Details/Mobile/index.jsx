import React from "react";
import { Badge, Avatar, Divider, Calendar, Pagination, Button, Row, Popover } from "antd";
import { BsShare, BsHeart, star, verified, arrowLeft, verticalDots } from "@/assets";
import { Primary, Wrapper } from "@/UI";
import { Link } from "react-router-dom";

const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
}
const content = (
    <div>
        <button className="block my-2">
            <BsShare size={18} />
        </button>
        <button className="block my-2">
            <BsHeart size={18} />
        </button>
    </div>
);
export const TutorMobile = () => {
    return (
        <div className="grid grid-cols-1 gap-x-4">
            <div className="col-span-1 min-h-screen">
                <Wrapper className="mb-6 !py-4 px-3 flex justify-between gap-x-8">
                    <Link to="/student" className="flex items-center">
                        <img src={arrowLeft} alt="logo" />
                    </Link>
                    <div className="flex items-center gap-x-2" >
                        <Badge className="relative">
                            <Avatar src={"https://picsum.photos/id/237/200/300"} size={60} />
                        </Badge>
                        <h3 className="font-bold">Teacher Darren</h3>
                    </div>
                    <Popover
                        placement="left"
                        content={content}
                        trigger="click">
                        <img src={verticalDots} alt="img" />
                    </Popover>
                </Wrapper>
                <Wrapper className="mb-6 !px-0 !py-0 relative overflow-hidden">
                    <div className="grid grid-cols-3 gap-6 bg-slate-200 relative top-0 w-full p-5">
                        <div className="p-2 bg-white flex-center flex-col rounded-10">
                            <h3 className="text-green">British</h3>
                            <p className="text-gray-700">Accent</p>
                        </div>
                        <div className="p-2 bg-white flex-center flex-col rounded-10">
                            <h3 className="text-green">435</h3>
                            <p className="text-gray-700">Students</p>
                        </div>
                        <div className="p-2 bg-white flex-center flex-col rounded-10">
                            <h3 className="text-green">7,205</h3>
                            <p className="text-gray-700">Lessons</p>
                        </div>
                    </div>
                    <div className="px-5 my-5">
                        <div className="my-6">
                            <li className="text-gray-800">From China</li>
                            <li className="text-gray-800">Living in Seoul, Republic of Korea</li>
                        </div>
                        <div>
                            <ul className="flex justify-between my-3">
                                <h2>About</h2>
                            </ul>
                            <li>
                                All language. One world.<br></br>Hello everyone! I do speak Chinese, English, Japanese, and Korean, and plan to learn español. I really know how difficult to learn a foreign language, and would like to share the secret. Normally, I prefer to explain by using the easiest target words, but if you want to understand them better from your language, I can also explain in the language that makes you feel more comfortable. According to your level, I will adjust the speed and vocabs picking. Take you to an immersive environment without going to China, a more comfortable and interesting  as talking with a close friend.
                            </li>
                        </div>
                    </div>
                    <div className="bg-slate-200 relative bottom-0 w-full p-3">
                        <li className="text-gray-800 text-center">edu-platform teacher since May 18, 2021</li>
                    </div>
                </Wrapper>
                <div className="flex overflow-x-scroll gap-x-2">
                    <Wrapper size="small" className="flex justify-between mb-6 gap-x-10">
                        <div className="flex gap-1">
                            <img src={star} alt="Rating" />
                            <h2>4.9</h2>
                        </div>
                        <li>Ratings</li>
                    </Wrapper>
                    <Wrapper size="small" className="flex justify-between mb-6 gap-x-5">
                        <h2>452</h2>
                        <li>Students</li>
                    </Wrapper>
                    <Wrapper size="small" className="flex justify-between mb-6 gap-x-5">
                        <h2>222</h2>
                        <li>Ratings</li>
                    </Wrapper>
                </div>
                <Wrapper className="mb-6 px-5">
                    <h2 className="mb-3">Me as a teacher</h2>
                    <p>I have been teaching for about 15 years, and one and a half years online. Several times I have been awarded for high student satisfaction. I have taught at all levels from beginner to advanced and even university preparation. I particularly enjoy grammar, but am able to assist in all aspects of language acquisition.</p>
                </Wrapper>
                <Wrapper className="mb-6 px-5">
                    <h2>Resume <span className="italic">(optional)</span></h2>
                    <div className="work-experience mt-5">
                        <h3 className="font-semibold mb-2">Work experience</h3>
                        <ul className="flex justify-between mb-4">
                            <li>2003-2007</li>
                            <ul>
                                <li>Lector Benedek Elek College</li>
                                <li>Benedek Elek College - Sopron, Hungary</li>
                            </ul>
                        </ul>
                        <ul className="flex justify-between mb-4">
                            <li>2003-2007</li>
                            <ul>
                                <li>Lector Benedek Elek College</li>
                                <li>Benedek Elek College - Sopron, Hungary</li>
                            </ul>
                        </ul>
                        <ul className="flex justify-between mb-4">
                            <li>2003-2007</li>
                            <ul>
                                <li>Lector Benedek Elek College</li>
                                <li>Benedek Elek College - Sopron, Hungary</li>
                            </ul>
                        </ul>
                    </div>
                    <div className="education mt-5">
                        <h3 className="font-semibold mb-2">Education</h3>
                        <ul className="flex justify-between mb-4">
                            <li>2003-2007</li>
                            <ul>
                                <li>Lector Benedek Elek College</li>
                                <li>Benedek Elek College - Sopron, Hungary</li>
                            </ul>
                        </ul>
                        <ul className="flex justify-between mb-4">
                            <li>2003-2007</li>
                            <ul>
                                <li>Lector Benedek Elek College</li>
                                <li>Benedek Elek College - Sopron, Hungary</li>
                            </ul>
                        </ul>
                    </div>
                </Wrapper>
                <Wrapper className="mb-6 px-5">
                    <h2 className="mb-3">Certificates <span className="italic">(optional)</span></h2>
                    <div className="certificates mt-5">
                        <h3 className="font-semibold mb-2">Education</h3>
                        <ul className="flex justify-between mb-4">
                            <li>2003-2007</li>
                            <li className="flex justify-between">Teaching English as a Second Language TEFL
                                <span className="text-green-500 mx-3 flex items-center"><img src={verified} alt="logo" /> Verified</span>
                            </li>
                        </ul>
                        <ul className="flex justify-between mb-4">
                            <li>2003-2007</li>
                            <li className="flex">Teaching English as a Second Language TEFL
                                <span className="text-green-500 mx-3 flex items-center"><img src={verified} alt="logo" />Verified</span>
                            </li>
                        </ul>
                    </div>
                </Wrapper>
                <Wrapper className="mb-6 px-5">
                    <h2 className="mb-3">Schedule</h2>
                    <li className="my-3">Select a day</li>
                    <div className="w-full border border-gray rounded-20 overflow-hidden">
                        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                    </div>
                </Wrapper>
                <Wrapper className="mb-6 px-5">
                    <h2 className="mb-3">Reviews</h2>
                    <div className="grid grid-cols-1 gap-y-5">
                        <div className="rounded-10 bg-blue-50 border-2 border-gray-200 p-4">
                            <div className="w-full">
                                <div className="flex items-center mb-3">
                                    <Avatar src={"https://picsum.photos/id/237/200/300"} size={60} />
                                    <ul className="mx-3">
                                        <h3 className="font-semibold">John Doe</h3>
                                        <p>3 English lessons</p>
                                    </ul>
                                </div>
                                <p className="line-clamp-2">The interested warm up. Insist on learning more from Frank</p>
                                <p className="text-gray-500 my-2">Mar 8, 2023</p>
                            </div>
                        </div>
                        <div className="rounded-10 bg-blue-50 border-2 border-gray-200 p-4">
                            <div className="w-full">
                                <div className="flex items-center mb-3">
                                    <Avatar src={"https://picsum.photos/id/237/200/300"} size={60} />
                                    <ul className="mx-3">
                                        <h3 className="font-semibold">John Doe</h3>
                                        <p>3 English lessons</p>
                                    </ul>
                                </div>
                                <p className="line-clamp-2">The interested warm up. Insist on learning more from Frank</p>
                                <p className="text-gray-500 my-2">Mar 8, 2023</p>
                            </div>
                        </div>
                        <div className="rounded-10 bg-blue-50 border-2 border-gray-200 p-4">
                            <div className="w-full">
                                <div className="flex items-center mb-3">
                                    <Avatar src={"https://picsum.photos/id/237/200/300"} size={60} />
                                    <ul className="mx-3">
                                        <h3 className="font-semibold">John Doe</h3>
                                        <p>3 English lessons</p>
                                    </ul>
                                </div>
                                <p className="line-clamp-2">The interested warm up. Insist on learning more from Frank</p>
                                <p className="text-gray-500 my-2">Mar 8, 2023</p>
                            </div>
                        </div>
                        <div className="rounded-10 bg-blue-50 border-2 border-gray-200 p-4">
                            <div className="w-full">
                                <div className="flex items-center mb-3">
                                    <Avatar src={"https://picsum.photos/id/237/200/300"} size={60} />
                                    <ul className="mx-3">
                                        <h3 className="font-semibold">John Doe</h3>
                                        <p>3 English lessons</p>
                                    </ul>
                                </div>
                                <p className="line-clamp-2">The interested warm up. Insist on learning more from Frank</p>
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
                <Wrapper className="mb-6 px-5">
                    <h2>Trial lesson</h2>
                    <p>One time, 15 minutes</p>
                    <Divider className="opacity-50 my-3" />
                    <ul className="flex flex-between">
                        <li>Trial lesson</li>
                        <li className="text-green">Free</li>
                    </ul>
                    <Primary rounded className="w-full" htmlType="button" style={{ marginTop: "1rem" }}>
                        Call
                    </Primary>
                </Wrapper>
                <Wrapper className="mb-6 px-5">
                    <h2>Private lesson</h2>
                    <Divider className="opacity-50 my-3" />
                    <Row className="justify-between">
                        <Button
                            block
                            size="large"
                            shape="round"
                            type="primary"
                            ghost
                            htmlType="submit"
                            style={{ marginBottom: "8px" }}
                        >
                            Contact Lesson
                        </Button>
                        <Primary block rounded htmlType="button">
                            Start Lesson
                        </Primary>
                    </Row>
                </Wrapper>
            </div>
        </div>
    )
}
