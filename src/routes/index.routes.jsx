import React from "react";
import { useRoutes } from "react-router-dom";
import AdminLayout from "../layouts/Admin/admin.layout";
import HomeLayout from "../layouts/Home/home.layout";
import HomeContent from "../pages/Home/HomeContent/HomeContent";
import Contact from "../pages/Home/Contact/Contact";
import News from "../pages/Home/News/News";
import SignIn from "../pages/Home/SignIn/SignIn";
import SignUp from "../pages/Home/SignUp/SignUp";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import TicketRoom from "../pages/TicketRoom/TicketRoom";
import AuthGuard from "../guards/auth.guards";
import NoAuthGuard from "../guards/no-auth.guards";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <HomeContent />,
        },
        {
          path: "news",
          element: <News />,
        },
        { path: "contact", element: <Contact /> },
        {
          path: "/",
          element: <NoAuthGuard />,
          children: [
            { path: "sign-in", element: <SignIn /> },
            { path: "sign-up", element: <SignUp /> },
          ],
        },
        { path: "movie-detail/:movieId", element: <MovieDetail /> },
        {
          path: "/",
          element: <AuthGuard />,
          children: [
            { path: "ticket-room/:showtimeId", element: <TicketRoom /> },
          ],
        },
      ],
    },
    { path: "/admin", element: <AdminLayout /> },
  ]);
  return routing;
}
