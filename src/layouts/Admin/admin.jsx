import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu, message } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { USER_INFO_KEY } from "../../constants/common";
import "./index.scss";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export default function AdminLayout() {
  const userState = useSelector((state) => state.userReducer);
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setUser(userState.userInfo);
  }, [userState]);

  const Click = (e) => {
    if (e.key === "F") {
      navigate("/admin/Film");
    } else if (e.key === "2") {
      navigate("/admin/film/showtime");
    } else if (e.key === "sub1") {
      navigate("/admin/user");
    } else if (e.key === "A") {
      navigate("/admin/film/addFilm");
    }
  };
  const items = [
    getItem("User", "sub1", <UserOutlined />),
    getItem("Files", "9", <FileOutlined />, [
      getItem("Film", "F"),
      getItem("Add Film", "A"),
    ]),
    getItem("Show Time", "2", <DesktopOutlined />),
  ];
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem(USER_INFO_KEY);

    dispatch({
      type: "USER_UPLOAD",
      payload: null,
    });
    message.success("Logged Out Successfully!");
    navigate("/");
  };
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo">
          <span className="text-light p-3">
            <Link to={"/"}>
              <i className="fa-solid fa-film text-info fa-2x"></i>Cinema
            </Link>
          </span>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["sub1"]}
          onClick={Click}
          mode="inline"
          items={items}
        />
        {user ? (
          <div className="text-center">
            <span className="text-light">Hello {user.hoTen}</span>
            <Button
              className="my-3 w-100"
              type="primary"
              onClick={() => {
                handleLogout();
              }}
            >
              Log Out
            </Button>
          </div>
        ) : (
          ""
        )}
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Design ©2022 Created by Ho Long Dai
        </Footer>
      </Layout>
    </Layout>
  );
}
