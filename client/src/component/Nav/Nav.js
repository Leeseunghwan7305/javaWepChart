import React, { useState } from "react";
import "./Nav.css";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { HiChartBar } from "react-icons/hi";
import { RiLineChartLine } from "react-icons/ri";
import { FcMultipleInputs } from "react-icons/fc";
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
        <h1>LIVE CHARTS</h1>
        <FiAlignJustify className="icons" onClick={toggle}></FiAlignJustify>
      </div>
      <div className="bottom-nav">
        <FcMultipleInputs className="bottom-icons"></FcMultipleInputs>
        <h1>
          LIVE
          <br />
          CHARTS
        </h1>
        <p>
          20160333 유건 &nbsp; 20180852 이승환 &nbsp;20180865 임채훈
          &nbsp;20180961 홍유진 &nbsp;20190835 박형진
        </p>
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
