import { Tabs } from "antd";
import React from "react";
const { TabPane } = Tabs;

const HomeMenu = () => {
  return (
    <div className="container py-5">
      <Tabs
        defaultActiveKey="1"
        // tabPosition={mode}
        tabPosition="left"
        style={{
          height: 500,
        }}
      >
        {[
          ...Array.from(
            {
              length: 5,
            },
            (_, i) => i
          ),
        ].map((i) => (
          <TabPane
            tab={
              <img
                width={60}
                className="rounded-full"
                src={`https://picsum.photos/20${i}`}
                alt="random"
              />
            }
            key={i}
            disabled={i === 28}
          >
            Content of tab {i}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default HomeMenu;
