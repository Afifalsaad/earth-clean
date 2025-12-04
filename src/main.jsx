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
import { ThemeProvider } from "next-themes";
import ErrorPage from "./Components/Pages/ErrorPage.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import PaymentSuccess from "./Components/Payment/PaymentSuccess.jsx";
import PaymentCancelled from "./Components/Payment/PaymentCancelled.jsx";
import AdminRoute from "./assets/Routes/AdminRoute.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";

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
        path: "/register",
        Component: Register,
      },
      {
        path: "/allIssues",
        element: (
          <PrivateRoute>
            <AllIssues></AllIssues>
          </PrivateRoute>
        ),
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
        path: "dashboard",
        element: (
          <AdminRoute>
            <Dashboard></Dashboard>
          </AdminRoute>
        ),
      },
      {
        path: "dashboard",
      },
      {
        path: "/myIssues",
        element: (
          <PrivateRoute>
            <MyIssues></MyIssues>
            //{" "}
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
