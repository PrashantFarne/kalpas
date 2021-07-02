import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div id="sidebar">
        <ul>
          <li id="reader1">
            <h5>Hi Reader,</h5>
            <h6>Here's your News!</h6>
          </li>

          <li id="toggle2">
            <h4>View Toggle</h4>

            <label class="switch">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
          </li>

          <li id="feedback3">
            <h4>Have a Feedback?</h4>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
