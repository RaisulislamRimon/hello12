import React from "react";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";

const MeetLink = () => {
  return (
    <div>
      <h1>MeetLink</h1>
      {/* <Link to="https://meet.google.com/"> */}
      <a href="https://meet.google.com/">
        <button className="btn border-t-cyan-200 bg-lime-400 hover:text-white">
          Generate meet link
        </button>
      </a>
      <Iframe
        url="https://meet.google.com/"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"
      />
    </div>
  );
};

export default MeetLink;
