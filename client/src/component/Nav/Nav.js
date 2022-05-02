import React, { useState } from "react";
import "./Nav.css";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { HiChartBar } from "react-icons/hi";
import { RiLineChartLine } from "react-icons/ri";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { AiOutlineRadarChart } from "react-icons/ai";
const Nav = ({ setChartType }) => {
  const [toggleBox, setToggleBox] = useState(false);
  const [selectBox, setSelectBox] = useState("");
  function changeType(type) {
    setChartType(type);
  }
  function toggle(e) {
    if (
      e.target.classList[0] === "buttons" ||
      e.target.classList[0] === "fixIcons" ||
      e.target.classList[0] === "icons"
    )
      if (toggleBox != undefined) setToggleBox((toggleBox) => !toggleBox);
  }
  function colorBox(e) {
    setSelectBox(e.target.innerText);
  }
  return (
    <>
      <div className="nav">
        <FiAlignJustify className="icons" onClick={toggle}></FiAlignJustify>
      </div>
      <div
        onClick={toggle}
        className={`buttons ${toggleBox ? "ToggleButton" : null}`}
      >
        <div className="buttonTap" onClick={colorBox}>
          <FiX className="fixIcons"></FiX>
          <button
            className={selectBox === "레이더" ? "clickBox" : null}
            onClick={() => changeType("radar")}
          >
            <AiOutlineRadarChart></AiOutlineRadarChart>레이더
          </button>
          <button
            className={selectBox === " 라인" ? "clickBox" : null}
            onClick={() => changeType("line")}
          >
            <RiLineChartLine></RiLineChartLine> 라인
          </button>
          <button
            className={selectBox === "바" ? "clickBox" : null}
            onClick={() => changeType("bar")}
          >
            <HiChartBar></HiChartBar>바
          </button>
          <button
            className={selectBox === " 수평바" ? "clickBox" : null}
            onClick={() => changeType("horizontalBar")}
          >
            <RiBarChartHorizontalFill></RiBarChartHorizontalFill> 수평바
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
