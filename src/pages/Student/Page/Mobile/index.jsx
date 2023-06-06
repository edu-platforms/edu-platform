import React from 'react'
import { Link } from "react-router-dom";
import { Badge, Space, Avatar, Tooltip } from "antd";
import { Wrapper } from "@/UI";
import {
    star,
    BsHeart,
    student,
} from "@/assets";

export const StudentMobile = () => {
    return (
        <div className="pb-16">
            <div className="mb-5 grid grid-cols-1 gap-5">

                {[1, 2, 3].map((item, key) => (
                    <Link to={`/tutor/1`}>
                        <Wrapper size="small" key={key}>
                            <div className="min-h-[185px] gap-x-4">
                                <Space className="w-full justify-between" direction="horizontal" size={[0, 7]}>
                                    <div className="flex" size={[0, 7]}>
                                        <Badge className="relative">
                                            <Avatar
                                                src={"https://picsum.photos/id/237/200/300"}
                                                size={60}
                                            />

                                            <div className="avatar-active">
                                                <span className="bg-green w-[12px] h-[12px] rounded-full" />
                                            </div>
                                        </Badge>

                                        <div className="ml-3">
                                            <div className="flex-between">

                                                <h2>Teacher Darren</h2>

                                            </div>

                                            <div className="flex-center gap-x-2">
                                                <img src={student} alt="Student" />
                                                <span>3,241 students</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Tooltip title="Favourite">
                                        <button>
                                            <BsHeart size={18} />
                                        </button>
                                    </Tooltip>
                                </Space>
                                <p className="line-clamp-2 my-5">
                                    Hello everyone, my name is Darren. I live in Normandy in
                                    France with my beautiful wife butdsfsd
                                </p>
                                <div className="flex justify-end mt-5">
                                    <div className="flex items-center gap-x-2">
                                        <span className="flex-center gap-x-2">
                                            <img src={star} alt="Rating" />

                                            <strong>4.9</strong>
                                        </span>

                                        <p className="text-sm">Ratings: 545</p>
                                    </div>
                                </div>
                            </div>
                        </Wrapper>
                    </Link>
                ))}

            </div>

            <button className="text-green font-bold border border-green py-3 px-14 block mx-auto rounded-full hover:opacity-70">
                Show more
            </button>
        </div>
    )
}
