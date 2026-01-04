import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import ErrorPage from "../Pages/ErrorPage";
import ForgotPassword from "../Pages/ForgotPassword";
import Challenges from "../Pages/Challenges";
import MyActivity from "../Pages/MyActivity";
import ChallengeDetails from "../Pages/ChallengeDetails";
import Loading from "../components/common/Loading";

import PrivateRoute from "./PrivateRoute";
import JoinChallenge from "../Pages/JoinChallenge";
import MyActivitiesUpdate from "../Pages/MyActivitiesUpdate";
import Profile from "../Pages/Dashboard/UserDashboard/Profile";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Accessibility from "../Pages/Accessibility";
import Privacy from "../Pages/privacy";
import Terms from "../Pages/Terms";
import OurMission from "../Pages/OurMission";
import SustainabilityTips from "../Pages/SustainabilityTips ";
import UserDashboardLayout from "../Layouts/UserDashboardLayout";
import AddNewChallenges from "../Pages/Dashboard/UserDashboard/AddNewChallenges";
import DashboardHome from "../Pages/Dashboard/UserDashboard/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/challenges",
        element: <Challenges />,
      },

      {
        path: "/mission",
        element: <OurMission />,
      },
      {
        path: "/tips",
        element: <SustainabilityTips />,
      },
      {
        path: "/challenges/:id",
        element: <ChallengeDetails />,
        loader: ({ params }) =>
          fetch(
            `https://eco-track-server-pied.vercel.app/challenges/${params.id}`
          ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      
      {
        path: "/challenges-join/:id",
        element: (
          <PrivateRoute>
            <JoinChallenge />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://eco-track-server-pied.vercel.app/challenges/${params.id}`
          ),
      },
      {
        path: "/my-activities",
        element: (
          <PrivateRoute>
            <MyActivity />
          </PrivateRoute>
        ),
      },

      {
        path: "/my-activities/:id",
        element: (
          <PrivateRoute>
            <MyActivitiesUpdate />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/accessibility",
        element: <Accessibility />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
    ],
  },
  // userDashboard
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <UserDashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index:true,
        element: <DashboardHome/>,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "my-activities",
        element: <MyActivity />,
      },
      {
        path: "challenges-add",
        element: (
          
            <AddNewChallenges/>
          
        ),
      },
    ],
  },
]);

export default router;
