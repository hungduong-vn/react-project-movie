import React from "react";
import "./SorryPage.scss";
export default function SorryPage() {
  return (
    <div className="sorry">
      <div className="container h-full d-flex justyfy-center align-items-center">
        <div className="sorry__wrapper">
          <h1 className="text-2xl">
            WE DON'T CURRENTLY SUPPORT VIEWING ON TABLETS AND MOBILE DEVICES!
            <br />
          </h1>
          <h3>
            Please switch to a wider screen (at least 1024 pixel wide) for
            better experience.
          </h3>
          <p> SORRY FOR THIS INCONVENIENCE :(</p>
        </div>
      </div>
    </div>
  );
}
