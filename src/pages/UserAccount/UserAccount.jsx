// import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import React from "react";
import BookingHistory from "./BookingHistory/BookingHistory";
import UserInfo from "./UserInfo/UserInfo";

export default function UserAccount() {
  
  return (
    <div className="container my-5">
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="User Information" key="1">
          <UserInfo/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Booking History" key="2">
          <BookingHistory/>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
