import React, { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const checkIsOn = isOn ? "on" : "off";
  const toggleBGColor = { backgroundColor: isOn ? "#4caf50" : "" };

  const handleOnSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <div
      className="toggle-switch"
      style={toggleBGColor}
      onClick={handleOnSwitch}
    >
      <div className={`switch ${checkIsOn}`}>
        <span className="switch-state"> {checkIsOn}</span>
      </div>
    </div>
  );
};

export default ToggleSwitch;
