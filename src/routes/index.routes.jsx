import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import UserRegister from "../pages/Admin/userRegister/userRegister";
const UserAccount = lazy(() => import("../pages/UserAccount/UserAccount"));
const ManagerGuard = lazy(() => import("../guards/manager.guard"));
const AddFilm = lazy(() => import("../pages/Admin/addFilm/addFilm"));
const AddShowTime = lazy(() =>
  import("../pages/Admin/AddShowTime/addShowTime")
);
const Film = lazy(() => import("../pages/Admin/Films/Film/Film"));
const ShowTimes = lazy(() => import("../pages/Admin/ShowTimes/showTimes"));
const UpdateFilm = lazy(() => import("../pages/Admin/update-film/update-film"));
const User = lazy(() => import("../pages/Admin/User/user"));
const UserEdit = lazy(() => import("../pages/Admin/userEdit/userEdit"));
const AdminLayout = lazy(() => import("../layouts/Admin/admin"));
const HomeLayout = lazy(() => import("../layouts/Home/home.layout"));
const HomeContent = lazy(() => import("../pages/Home/HomeContent/HomeContent"));
const Contact = lazy(() => import("../pages/Home/Contact/Contact"));
const News = lazy(() => import("../pages/Home/News/News"));
const SignIn = lazy(() => import("../pages/Home/SignIn/SignIn"));
const SignUp = lazy(() => import("../pages/Home/SignUp/SignUp"));
const MovieDetail = lazy(() => import("../pages/MovieDetail/MovieDetail"));
const TicketRoom = lazy(() => import("../pages/TicketRoom/TicketRoom"));
const AuthGuard = lazy(() => import("../guards/auth.guards"));
const NoAuthGuard = lazy(() => import("../guards/no-auth.guards"));

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
            { path: "/sign-in", element: <SignIn /> },
            { path: "/sign-up", element: <SignUp /> },
          ],
        },
        { path: "movie-detail/:movieId", element: <MovieDetail /> },
        {
          path: "/",
          element: <AuthGuard />,
          children: [
            { path: "/ticket-room/:showtimeId", element: <TicketRoom /> },
            { path: "/user-account", element: <UserAccount /> },
          ],
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: <ManagerGuard />,
          children: [
            {
              path: "user",
              element: <User />,
            },
            {
              path: "user/editUser",
              element: <UserEdit />,
            },
            {
              path: "user/register",
              element: <UserRegister />,
            },
            {
              path: "film/:filmId/update",
              element: <UpdateFilm />,
            },
            {
              path: "film/addFilm",
              element: <AddFilm />,
            },
            {
              path: "film",
              element: <Film />,
            },
            {
              path: "film/showtime/:filmId",
              element: <AddShowTime />,
            },
            {
              path: "film/showtime",
              element: <ShowTimes />,
            },
          ],
        },
      ],
    },
  ]);
  return routing;
}
