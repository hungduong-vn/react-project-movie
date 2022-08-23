import React from "react";
import { useRoutes } from "react-router-dom";
import AdminLayout from "../layouts/Admin/admin.layout";
import HomeLayout from "../layouts/Home/home.layout";

export default function Router() {
  const routing = useRoutes([
    { path: "/", element: <HomeLayout /> },
    { path: "/admin", element: <AdminLayout /> },
  ]);
  return routing;
}
