import React, { useState } from "react";
import "./Nav.css";
const Nav = ({ setChartType }) => {
  function changeType(type) {
    setChartType(type);
  }
  return (
    <div className="nav">
      <button onClick={() => changeType("horizontalBar")}>차트</button>
      <button onClick={() => changeType("line")}>파이</button>
      <button onClick={() => changeType("bar")}>라인</button>
      <button onClick={() => changeType("doughnut")}>그래프</button>
    </div>
  );
};

export default Nav;
