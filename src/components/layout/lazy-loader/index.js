import React from "react";
import { logo } from "../../../assets";
import "./styles.css";

export function LazyLoader() {
  return (
    <div id="lazy-loader">
      <img alt="img" src={logo} alt="logo" />
      <svg className="lazy-loader" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
}
