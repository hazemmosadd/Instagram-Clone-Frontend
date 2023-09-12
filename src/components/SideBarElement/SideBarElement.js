import React from "react";
import './SideBarElement.css'
const SideBarElement = ({ imageSrc, label , extraClass , onClick }) => {
  return (
    <div className={`sidebar__element `} onClick={onClick}>
      <img className={`sidebar__icon ${(extraClass) } ` }src={imageSrc}  ></img>
      <p className="element__name">{label}</p>
    </div>
  );
};

export default SideBarElement 