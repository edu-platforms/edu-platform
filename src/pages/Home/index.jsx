import React from "react";
import { Divider } from "antd";
import { Link } from "react-router-dom";
import { Primary, Secondary } from "@/UI";
import { TutorCard, CourseCard } from "@/components";
import { intro, arrowWhite, forChild, arrowCourseCard, tutor, mobileImg } from "@/assets";
import { useMedia } from "@/hooks";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MobileHome } from "./Mobile";

export default function Home() {
  const { isSmallMobile, isTablet } = useMedia()

  const info = {
    name: "Smith",
    country: "UK",
    rating: 5,
  };

  const reviews = {
    img: "https://picsum.photos/200/300",
    name: "Munisa",
    country: "UK",
    review:
      "I have experienced a growth in my confidence as an English-speaker, with a host of idioms now at my disposal. No matter where you come from or who you are,   edu-platform will be your best companion on journey toward better English",
  };

  const course = {
    name: 'John Doe',
    img: 'https://picsum.photos/305/320',
    country: 'USA',
    rating: 4.5,
    title: 'Basic Conversation Topics',
    degree: 'Beginner',
    lessonsCount: '12'
  };

  const a = Array.from({ length: 8 }, () => Math.random());
  const c = Array.from({ length: 4 }, () => Math.random());

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2
  };

  return (
    <>
      {isSmallMobile ? <MobileHome />
        :
        <>
          <div className="lg:flex md:flex sm:flex sm:items-start sm:justify-center items-start pt-[30px] justify-between">
            <div className="sm:flex-col items-center w-full">
              <h2 className="uppercase text-4xl lg:leading-[70px] md:leading-[55px] mb-9 lg:text-6xl md:text-4xl">
                Speak languages with confidence
              </h2>
              <div>
                <h3 className="max-w-[340px] text-base text-gray-CCC mb-4">
                  Tutor that has the personality, professional experience, or focus
                  area you need!
                </h3>
                <Link to="/tutor">
                  <Secondary w={"!w-[313px]"} icon={arrowWhite}>
                    Try trial lesson
                  </Secondary>
                </Link>
              </div>
            </div>
            {isTablet ?
              <img className="object-contain" src={mobileImg} alt="Introduce Photo" />
              :
              <img className="object-contain lg:max-w-[571px] md:max-w-[450px]" src={intro} alt="Introduce Photo" />
            }
          </div>

          <h3 className="max-w-[475px] font-medium text-2xl leading-8 text-[#5c5c5c] mt-[78px] mb-6">
            Language Learning On Your Schedule, With Teachers You Can Trust.
          </h3>
          <div className="flex-template">
            {c.map(i => (
              <TutorCard key={i} info={info} />
            ))}
          </div>

          <div className="mt-[180px] flex sm:flex-row flex-col justify-evenly items-start gap-4">
            <p className="main-title max-w-[300px] leading-[50px]">
              Choose your own tutor
            </p>
            <div>
              <h3 className="max-w-[340px] text-base text-[#5C5C5C] mb-4">
                Tutor that has the personality, professional experience, or focus
                area you need!
              </h3>
              <Link to="/student">
                <Secondary w={"!w-[313px]"} icon={arrowWhite}>
                  Try trial lesson
                </Secondary>
              </Link>
            </div>
          </div>

          <Divider className="mt-[132px] mb-5" />
          <div className="grid-template">
            {a.map((i) => (
              <CourseCard course={course} key={i} />
            ))}
          </div>

          <div className="mt-[80px] mb-[132px] flex sm:flex-row flex-col justify-evenly items-start gap-4">
            <p className="main-title max-w-[474px] leading-[50px]">
              Courses For Every Skill Level And Interest
            </p>
            <div>
              <h3 className="max-w-[365px] text-base text-[#5C5C5C] mb-4">
                Aim with us for academic test preparation, business, English,
                interview practice and more
              </h3>
              <Link to="/courses">
                <Secondary w={"!w-[313px]"} icon={arrowWhite}>
                  All Courses
                </Secondary>
              </Link>
            </div>
          </div>

          <Slider {...settings}>
            {c.map((i) => (
              <div key={i} className="slide">
                <div className="flex-center gap-5">
                  <img src={reviews?.img} alt="Student's avatar" />
                  <div>
                    <h4>{reviews?.name}</h4>
                    <p>{reviews?.country}</p>
                  </div>
                </div>
                <Divider className="my-5" />
                <p className="text-base leading-6 text-gray-800">
                  {reviews?.review}
                </p>
              </div>
            ))}
          </Slider>

          <div className="mt-[80px] mb-[132px] flex sm:flex-row flex-col justify-evenly items-start gap-4">
            <p className="main-title max-w-[300px] leading-[50px]">
              Start Goals With Edu-Platform
            </p>
            <div>
              <h3 className="max-w-[315px] text-base text-[#5C5C5C] mb-4">
                The achievements of our students are proof for you. Let's go
              </h3>
              <Link to="/tutor">
                <Secondary w={"!w-[385px]"} icon={arrowWhite}>
                  Start your free trial now
                </Secondary>
              </Link>
            </div>
          </div>

          <div className="bg-[#E6E6E6] py-9 px-[52px] rounded-2xl flex md:flex-row flex-col justify-evenly items-start gap-[85px]">
            <img src={forChild} alt="" />
            <div>
              <h3 className="font-semibold text-2xl sm:text-3xl text-[#5C5C5C]">
                Open your child's global future with fun lessons and games in
                English from day 1.
              </h3>
              <Link to="/sign-in" className="flex gap-2 mt-5">
                <Primary className="white-btn text-[#1A1A1A] font-medium border-none !py-1 !px-10">
                  For kids
                </Primary>
                <Primary className="white-btn border-none !p-3">
                  <img src={arrowCourseCard} alt="Icon" />
                </Primary>
              </Link>
            </div>
          </div>

          <div className="mt-[140px] flex md:flex-row flex-col justify-evenly gap-5">
            <img src={tutor} alt="Tutor" />
            <div>
              <h3 className="main-title">Become a tutor</h3>
              <p className="max-w-[365px] text-base text-[#5C5C5C] mt-2 mb-[44px]">
                Join our English tutoring community to enjoy flexible scheduling
                rewarding conversations with people from all over the world.
              </p>
              <Link to="/sign-up/teacher">
                <Secondary w={"!w-[288px]"} icon={arrowWhite}>
                  Get started
                </Secondary>
              </Link>
            </div>
          </div>
        </>
      }
    </>
  );
}
