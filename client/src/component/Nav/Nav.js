import React, { useState } from "react";
import "./Nav.css";
const Nav = ({ setChartType }) => {
  function changeType(type) {
    setChartType(type);
  }
  return (
    <div className="nav">
      <button onClick={() => changeType("radar")}>레이더</button>
      <button onClick={() => changeType("line")}>라인</button>
      <button onClick={() => changeType("bar")}>바</button>
      <button onClick={() => changeType("horizontalBar")}>수평바</button>
    </div>
  );
};

export default Nav;
