import { Suspense } from "react";
import { useBootstrap } from "src/libs/hooks";
import { Loader } from "@/UI";
// import { PublicRoutes } from "./PublicRoutes";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserLayout, TutorLayout, StudentLayout } from "@/layouts";

import {
  Home,
  Help,
  Plan,
  Tutor,
  SignIn,
  SignUp,
  Forgot,
  Student,
  Details,
  Courses,
  Purchase,
  Teachers,
  TutorDetails,
  TutorHistory,
  TutorLibrary,
  TutorRegister,
  TutorPriority,
  TutorIncoming,
  TutorUpcoming,
  TutorDashboard,
  TutorUnassigned,
  StudentLive,
  StudentTutors,
  StudentCourses,
  StudentUpcoming,
  StudentSchedule,
  StudentCompleted,
  StudentDashboard,
  Settings,
  Subscriptions,
  Favorites,
  Feedback,
  Chat
} from "@/pages";

export const Router = () => {
  const { isAuth, isInitiated } = useBootstrap();

  if (isInitiated) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />

        <Route
          path="courses"
          element={
            <Suspense fallback={<Loader />}>
              <Courses />
            </Suspense>
          }
        />

        <Route
          path="courses/:id"
          element={
            <Suspense fallback={<Loader />}>
              <Details />
            </Suspense>
          }
        />

        <Route
          path="plan"
          element={
            <Suspense fallback={<Loader />}>
              <Plan />
            </Suspense>
          }
        />

        <Route
          path="payment"
          element={
            <Suspense fallback={<Loader />}>
              <Purchase />
            </Suspense>
          }
        />

        <Route
          path="sign-up/teacher"
          element={
            <Suspense fallback={<Loader />}>
              <TutorRegister />
            </Suspense>
          }
        />

        <Route
          path="find-teacher"
          element={
            <Suspense fallback={<Loader />}>
              <Teachers />
            </Suspense>
          }
        />
      </Route>

      {/* STUDENT */}
      <Route path="/student" element={<StudentLayout />}>
        <Route index element={<Student />} />

        <Route path="tutors" element={<StudentTutors />} />
        <Route path="courses" element={<StudentCourses />} />

        {/* account */}
        <Route path="settings" element={<Settings />} />
        <Route path="subscriptions" element={<Subscriptions />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="help" element={<Help />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="chat" element={<Chat/>} />
        <Route path="dashboard" element={<StudentDashboard />}>
          <Route
            index
            replace
            element={<Navigate to={"/student/dashboard/upcoming"} />}
          />

          <Route
            path="upcoming"
            element={
              <Suspense fallback={<Loader />}>
                <StudentUpcoming />
              </Suspense>
            }
          />

          <Route
            path="live"
            element={
              <Suspense fallback={<Loader />}>
                <StudentLive />
              </Suspense>
            }
          />
          <Route
            path="schedule"
            element={
              <Suspense fallback={<Loader />}>
                <StudentSchedule />
              </Suspense>
            }
          />
          <Route
            path="completed"
            element={
              <Suspense fallback={<Loader />}>
                <StudentCompleted />
              </Suspense>
            }
          />
        </Route>
      </Route>

      {/* TUTOR */}
      <Route path="/tutor" element={<TutorLayout />}>
        <Route index element={<Tutor />} />

        <Route
          path=":id"
          element={
            <Suspense fallback={<Loader />}>
              <TutorDetails />
            </Suspense>
          }
        />

        <Route
          path="priority"
          element={
            <Suspense fallback={<Loader />}>
              <TutorPriority />
            </Suspense>
          }
        />

        <Route
          path="library"
          element={
            <Suspense fallback={<Loader />}>
              <TutorLibrary />
            </Suspense>
          }
        />

        <Route
          path="history"
          element={
            <Suspense fallback={<Loader />}>
              <TutorHistory />
            </Suspense>
          }
        />

        <Route path="dashboard" element={<TutorDashboard />}>
          <Route
            index
            replace
            element={<Navigate to={"/tutor/dashboard/incoming"} />}
          />
          <Route path="incoming" element={<TutorIncoming />} />
          <Route path="unassigned" element={<TutorUnassigned />} />
          <Route path="upcoming" element={<TutorUpcoming />} />
        </Route>
      </Route>

      {/* <Route element={<PublicRoutes isAuth={isAuth} />}> */}
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/reset" element={<Forgot />} />

      <Route
        path="/sign-in"
        element={
          <Suspense fallback={<Loader />}>
            <SignIn />
          </Suspense>
        }
      />

      <Route
        path="/sign-up/student"
        element={
          <Suspense fallback={<Loader />}>
            <SignUp />
          </Suspense>
        }
      />
      {/* </Route> */}
    </Routes>
  );
};
