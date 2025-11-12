import React from "react";
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
import AddNewChallenges from "../Pages/AddNewChallenges";
import PrivateRoute from "./PrivateRoute";
import JoinChallenge from "../Pages/JoinChallenge";
import MyActivitiesUpdate from "../Pages/MyActivitiesUpdate";

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
        path: "/challenges/:id",
        element: <ChallengeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/challenges/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/challenges-add",
        element: (
          <PrivateRoute>
            <AddNewChallenges />
          </PrivateRoute>
        ),
      },
      {
        path: "/challenges-join/:id",
        element: (
          <PrivateRoute>
            <JoinChallenge />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/challenges/${params.id}`),
      },
      {
        path: "/my-activities",
        element: <PrivateRoute><MyActivity /></PrivateRoute>,
      },
      
      {
        path: "/my-activities/:id",
        element: <PrivateRoute><MyActivitiesUpdate/></PrivateRoute>,
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
    ],
  },
]);

export default router;
