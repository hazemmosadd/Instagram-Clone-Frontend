import React from "react";
import "./Avatar.css";

function Avavtar(props) {
  return (
    <div className="avatar-wrapper">
      <div className="avatar">
        <img className="avatar-img" src={props.avatar} alt=""></img>
      </div>
    </div>
  );
}

export default Avavtar;
