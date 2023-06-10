import React from 'react'
import { Link } from "react-router-dom";
import { Badge, Space, Avatar, Tooltip, Button } from "antd";
import { Wrapper } from "@/UI";
import {
    star,
    BsHeart,
    student,
    arrowLeft
} from "@/assets";
import { useMedia } from "src/libs/hooks";

export const Favorites = () => {
    const { isMobile } = useMedia();

    return (
        <div>
            {isMobile ? (
                <div className='flex-between'>
                    <Button className='flex items-center justify-between h-10 pb-0 bg-white rounded-40'>
                        <img src={arrowLeft} alt="img" className='w-5 mr-2' />
                        <h3 className='font-bold'>Back</h3>
                    </Button>
                    <div className='flex gap-x-4'>
                    <h3 className='text-[#2086FE] underline cursor-pointer'>Clear all</h3>
                    <h3 className='font-bold'>Favorites</h3>
                    </div>
                </div>
            ) : (
                <div className='flex-between'>
                    <h4 className='font-bold'>Favorites</h4>
                    <h3 className='text-[#2086FE] underline cursor-pointer'>Clear All</h3>
                </div>
            )}
            <div className="my-10 grid xl:grid-cols-3 md:grid-cols-1 xl:gap-5 gap-5 pb-16">
                {[1, 2, 3, 4].map((item, key) => (
                    <Wrapper size="small" key={key}>
                        <div className="min-h-[170px] gap-x-4">
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
                                            <Link to={`/tutor/1`}>
                                                <h2>Teacher Darren</h2>
                                            </Link>
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
                ))}
            </div>
        </div>
    )
}
