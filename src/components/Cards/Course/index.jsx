import { Link } from "react-router-dom";
import { Image } from "antd";
import { useMediaQuery } from "react-responsive";
import { arrowCourseCard } from "@/assets";
import CourceCardMobile from "./Mobile";
import { noPhoto } from "@/assets";

export default function CourseCard({ course, type = 'courses' }) {
  const inMobile = useMediaQuery({ query: "(max-width: 428px)" });

  const { id, image, name, level } = course;

  return (
    <>
      {inMobile
        ? <CourceCardMobile course={course} />
        : <div className={`courses-card group ${type === 'courses' ? ' w-full' : 'w-full h-[496px]'} `}>
          <Image
            className="border border-1 w-full !object-contain"
            width='100%'
            alt="Course's Author"
            preview={false}
            height={289}
            src={image}
            fallback={noPhoto}
          />

          <div className="footer-primary">
            <h3 className="footer-title">
              {name || 'default title'}
            </h3>
            {type === 'details' ?
              <p className="text-base leading-6 text-graycc mt-2">Gain confidence and fluency in conversational English. </p>
              : <div className="footer-bottom">
                <span className="card-degree">{level}</span>
                <span>{course?.lessonsCount} Lesson</span>
                <Link to={`/courses/${id}`}>
                  <img
                    className="course-card-btn"
                    src={arrowCourseCard}
                    alt="Arrow"
                  />
                </Link>
              </div>
            }
          </div>
        </div>}
    </>
  );
}
