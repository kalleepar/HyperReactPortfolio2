import React from "react";
import { Link } from "react-router";

export default function Header() {
  return (
    // <!-- Background image --> */}
    <header>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url("https://i.pinimg.com/originals/45/ad/4c/45ad4c6ae569f608b4a713da2444e592.jpg")`,
          height: "290px",
        }}
      >
        <div
          className="mask"
          style={{ backgroundColor: "" }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Kal Parker</h1>
              <h4 className="mb-3">Coding Portfolio</h4>

           
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
