// import { Tabs } from "antd";
import React from "react";
export default function BrandTabPane({ brands, text }) {
  return (
    <div className="d-flex">
      <img width={60} src={brands.logo} alt={brands.tenCumRap} />
      {text && (
        <h1 className="pl-3 m-0" style={{ lineHeight: "60px" }}>
          {text.toUpperCase()}
        </h1>
      )}
    </div>
  );
}
