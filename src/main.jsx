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
import ThemeProvider from "./Provider/ThemeProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/issues"),
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
        loader: () => fetch("http://localhost:3000/allIssues"),
      },
      {
        path: "/issueDetails/:id",
        element: (
          <PrivateRoute>
            <IssueDetails></IssueDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/allIssues/${params.id}`),
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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
