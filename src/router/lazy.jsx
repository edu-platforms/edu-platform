import { lazy } from "react";
import { Loader } from "@/UI";

const handleCatchChunkError = () => {
  window.location.reload();

  return { default: Loader };
};

const Home = lazy(() =>
  import("@/pages")
    .then(({ Home }) => ({ default: Home }))
    .catch(handleCatchChunkError)
);

// Payment
const Plan = lazy(() =>
  import("@/pages")
    .then(({ Plan }) => ({ default: Plan }))
    .catch(handleCatchChunkError)
);

const Purchase = lazy(() =>
  import("@/pages")
    .then(({ Purchase }) => ({ default: Purchase }))
    .catch(handleCatchChunkError)
);

// Courses
const Courses = lazy(() =>
  import("@/pages")
    .then(({ Courses }) => ({ default: Courses }))
    .catch(handleCatchChunkError)
);

// Tutor
const Tutor = lazy(() =>
  import("@/pages")
    .then(({ Tutor }) => ({ default: Tutor }))
    .catch(handleCatchChunkError)
);

const TutorSign = lazy(() =>
  import("@/pages")
    .then(({ TutorSign }) => ({ default: TutorSign }))
    .catch(handleCatchChunkError)
);

const History = lazy(() =>
  import("@/pages")
    .then(({ History }) => ({ default: History }))
    .catch(handleCatchChunkError)
);

const TutorDetails = lazy(() =>
  import("@/pages")
    .then(({ TutorDetails }) => ({ default: TutorDetails }))
    .catch(handleCatchChunkError)
);

// Student
const Student = lazy(() =>
  import("@/pages")
    .then(({ Student }) => ({ default: Student }))
    .catch(handleCatchChunkError)
);

const Settings = lazy(() =>
  import("@/pages")
    .then(({ Settings }) => ({ default: Settings }))
    .catch(handleCatchChunkError)
);

const Subscriptions = lazy(() =>
  import("@/pages")
    .then(({ Subscriptions }) => ({ default: Subscriptions }))
    .catch(handleCatchChunkError)
);

const Favorites = lazy(() =>
  import("@/pages")
    .then(({ Favorites }) => ({ default: Favorites }))
    .catch(handleCatchChunkError)
);

const Help = lazy(() =>
  import("@/pages")
    .then(({ Help }) => ({ default: Help }))
    .catch(handleCatchChunkError)
);
const Feedback = lazy(() =>
  import("@/pages")
    .then(({ Feedback }) => ({ default: Feedback }))
    .catch(handleCatchChunkError)
);


const Live = lazy(() =>
  import("@/pages")
    .then(({ Live }) => ({ default: Live }))
    .catch(handleCatchChunkError)
);

const Schedule = lazy(() =>
  import("@/pages")
    .then(({ Schedule }) => ({ default: Schedule }))
    .catch(handleCatchChunkError)
);

const Upcoming = lazy(() =>
  import("@/pages")
    .then(({ Upcoming }) => ({ default: Upcoming }))
    .catch(handleCatchChunkError)
);

const Completed = lazy(() =>
  import("@/pages")
    .then(({ Completed }) => ({ default: Completed }))
    .catch(handleCatchChunkError)
);

const StudentDashboard = lazy(() =>
  import("@/pages")
    .then(({ StudentDashboard }) => ({ default: StudentDashboard }))
    .catch(handleCatchChunkError)
);

const Book = lazy(() =>
  import("@/pages")
    .then(({ Book }) => ({ default: Book }))
    .catch(handleCatchChunkError)
);

const SignIn = lazy(() =>
  import("@/pages")
    .then(({ SignIn }) => ({ default: SignIn }))
    .catch(handleCatchChunkError)
);

const SignUp = lazy(() =>
  import("@/pages")
    .then(({ SignUp }) => ({ default: SignUp }))
    .catch(handleCatchChunkError)
);

const Library = lazy(() =>
  import("@/pages")
    .then(({ Library }) => ({ default: Library }))
    .catch(handleCatchChunkError)
);

export {
  Home,
  Book,
  Live,
  Plan,
  Tutor,
  SignIn,
  SignUp,
  Courses,
  Student,
  Library,
  History,
  Schedule,
  Purchase,
  Upcoming,
  Completed,
  TutorSign,
  TutorDetails,
  StudentDashboard,
};
