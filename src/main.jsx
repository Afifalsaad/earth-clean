import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Pages/Login.jsx";
import Register from "./Components/Pages/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import MyIssues from "./Components/MyIssues/MyIssues.jsx";
import AddIssues from "./Components/AddIssues/AddIssues.jsx";
import MyContribution from "./Components/MyContribution/MyContribution.jsx";
import AllIssues from "./Components/AllIssues/AllIssues.jsx";
import PrivateRoute from "./Provider/PrivateRoute.jsx";
import IssueDetails from "./Components/Issue Deatils/IssueDetails.jsx";
import ErrorPage from "./Components/Pages/ErrorPage.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import PaymentSuccess from "./Components/Payment/PaymentSuccess.jsx";
import AboutUs from "./Components/About Us/AboutUs.jsx";
import PaymentCancelled from "./Components/Payment/PaymentCancelled.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import DashboardHome from "./Components/Dashboard/DashboardHome.jsx";
import AllContributions from "./Components/Dashboard/AllContributions.jsx";
import AllIssuesDashboard from "./Components/Dashboard/AllIssuesDashboard.jsx";
import Profile from "./Components/Dashboard/Profile.jsx";
import AllUsers from "./Components/Dashboard/AllUsers.jsx";
import AboutUsDashboard from "./Components/Dashboard/AboutUs.jsx";
import PrivacyPolicyDashboard from "./Components/Dashboard/PrivacyPolicy.jsx";
import PrivacyPolicy from "./Components/Privacy Policy/PrivacyPolicy.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("https://assignment-10-server-jet-nine.vercel.app/issues"),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/About-us",
        Component: AboutUs,
      },
      {
        path: "/Privacy-policy",
        Component: PrivacyPolicy,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/allIssues",
        element: <AllIssues></AllIssues>,
        loader: () =>
          fetch("https://assignment-10-server-jet-nine.vercel.app/allIssues"),
      },
      {
        path: "/issueDetails/:id",
        element: (
          <PrivateRoute>
            <IssueDetails></IssueDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-jet-nine.vercel.app/allIssues/${params.id}`
          ),
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancelled",
        Component: PaymentCancelled,
      },
      {
        path: "/myIssues",
        element: (
          <PrivateRoute>
            <MyIssues></MyIssues>
          </PrivateRoute>
        ),
      },
      {
        path: "/addIssues",
        element: (
          <PrivateRoute>
            <AddIssues></AddIssues>
          </PrivateRoute>
        ),
      },
      {
        path: "/myContribution",
        element: (
          <PrivateRoute>
            <MyContribution></MyContribution>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "home",
        Component: DashboardHome,
      },
      {
        path: "allIssues",
        Component: AllIssuesDashboard,
      },
      {
        path: "allContributions",
        Component: AllContributions,
      },
      {
        path: "aboutUs",
        Component: AboutUsDashboard,
      },
      {
        path: "privacy-policy",
        Component: PrivacyPolicyDashboard,
      },
      {
        path: "allUsers",
        Component: AllUsers,
      },
      {
        path: "profile",
        Component: Profile,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
