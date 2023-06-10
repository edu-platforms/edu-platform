import React from "react";
import { Wrapper } from "@/UI";
import { Outlet, NavLink } from "react-router-dom";
import { studentDashLinks } from "src/libs/constants";
import {useMedia} from "src/libs/hooks";
export default function Dashboard() {
  const { isMobile } = useMedia();

  return (
    <>
    {isMobile?(
      <div className="student-dash-mobile">
        <div className="flex !p-4 overflow-scroll gap-x-3">
        {studentDashLinks.map(({ key, label }) => (
            <NavLink
                to={`/student/dashboard/${label}`}
                className={({ isActive }) =>
                  `student-dash-link-mobile ${isActive && `bg-green text-white`}`
                }
              >
                {key}
              </NavLink>
        ))}
        </div>
      <div className="flex flex-col items-center justify-center py-5">
        <Outlet/>
      </div>
      </div>
    ):(
      <div className="grid xl:grid-cols-3 md:grid-cols-1 gap-5">
      <Wrapper className="xl:h-[210px] md:h-fit col-span-1">
        <ul className="xl:student-dash-list md:flex-between">
          {studentDashLinks.map(({ key, label }) => (
            <li key={key}>
              <NavLink
                to={`/student/dashboard/${label}`}
                className={({ isActive }) =>
                  `student-dash-link ${isActive && `student-dash-link-active`}`
                }
              >
                {key}
              </NavLink>
            </li>
          ))}
        </ul>
      </Wrapper>

      <div className="col-span-2">
        <Outlet />
      </div>
    </div>
    )

    }
    </>
  );
}
