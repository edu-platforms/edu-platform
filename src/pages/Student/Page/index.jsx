import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Space, Avatar, Tooltip } from "antd";
import { Wrapper, CustomSelect } from "@/UI";
import { useMedia } from "@/hooks";
import { StudentMobile } from "./Mobile";
import {
  star,
  offer,
  timer,
  search,
  BsHeart,
  student,
  payment,
  publicEarth,
} from "@/assets";

export default function Student() {
  window.scrollTo(0, 0);

  const [filter, setFilter]=useState(false);
  const { isMobile, isTablet } = useMedia();

  return (
    <>
      {isMobile ? <StudentMobile/> 
      : 
      (
        <div>
          <h1>The best English tutor for you</h1>

          <p className="mt-5 mb-5 w-full">
            Looking for a great way to improve your English? this platform provides
            you with qualified English teachers. Hire an online English tutor to
            help you learn English.
          </p>
          {isTablet ? (
            <form>
              <div className="flex flex-col justify-between">
                <label className="relative w-full">
                  <input
                    type="text"
                    className="search-input w-full"
                    placeholder="Search course/teacher"
                  />

                  <img src={search} className="search-thumb" alt="Search" />
                </label>
                <div className="w-full my-4 flex justify-between duration-300">
                  <CustomSelect
                    isMobile={isMobile}
                    prefixIcon={publicEarth}
                    defaultValue="english"
                    options={[
                      {
                        value: "english",
                        label: "English",
                      },
                    ]}
                  />

                  <CustomSelect
                    isMobile={isMobile}
                    prefixIcon={offer}
                    defaultValue="category"
                    options={[
                      {
                        value: "category",
                        label: "Category",
                      },
                    ]}
                  />

                  <CustomSelect
                    isMobile={isMobile}
                    prefixIcon={timer}
                    defaultValue="time"
                    options={[
                      {
                        value: "time",
                        label: "Time ",
                      },
                    ]}
                  />

                  <CustomSelect
                    isMobile={isMobile}
                    prefixIcon={payment}
                    defaultValue="price"
                    options={[
                      {
                        value: "price",
                        label: "Price",
                      },
                    ]}
                  />
                </div>
              </div>
            </form>
          ) : (
            <form className="flex gap-x-14 xl:overflow-visible md:overflow-scroll">
        <Space size={[10, 0]}>
          <CustomSelect
            prefixIcon={publicEarth}
            defaultValue="english"
            options={[
              {
                value: "english",
                label: "English",
              },
            ]}
          />

          <CustomSelect
            prefixIcon={offer}
            defaultValue="category"
            options={[
              {
                value: "category",
                label: "Category",
              },
            ]}
          />

          <CustomSelect
            prefixIcon={timer}
            defaultValue="time"
            options={[
              {
                value: "time",
                label: "Time ",
              },
            ]}
          />

          <CustomSelect
            prefixIcon={payment}
            defaultValue="price"
            options={[
              {
                value: "price",
                label: "Price ",
              },
            ]}
          />
        </Space>

        <label className="relative">
          <input
            type="text"
            className="search-input"
            placeholder="Search course/teacher"
          />

          <img src={search} className="search-thumb" alt="Search" />
        </label>
      </form>
          )}

          <div className="my-10 grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">

            {[1, 2, 3].map((item, key) => (
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

          <button className="text-green font-bold border border-green py-3 px-14 block mx-auto rounded-full hover:opacity-70">
            Show more
          </button>
        </div>
      )}
    </>
  );
}
