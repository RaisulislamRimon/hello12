import React from "react";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";

const MeetLink = () => {
  const [meetLink, setMeetLink] = React.useState("");

  const handleMeetLink = (e) => {
    // window.open("https://meet.google.com/", "_blank");
    window.open("https://meet.google.com/");
    setTimeout(() => {
      setMeetLink("e.target.value");
      document
        .getElementsByTagName("button")[3]
        .addEventListener("click", function () {
          alert("Hello");
        });
    }, 5000);
  };

  console.log("meetLink", meetLink);

  return (
    <div>
      <h1>MeetLink</h1>
      {/* <Link to="https://meet.google.com/"> */}
      {/* <a href="https://meet.google.com/" target="_blank"> */}
      {/* <a href="https://meet.google.com/"> */}
      <button
        className="btn border-t-cyan-200 bg-lime-400 hover:text-white"
        onClick={handleMeetLink}
      >
        Generate meet link
      </button>
      {/* </a> */}
      {/* <Iframe
        url="https://meet.google.com/"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"
      /> */}
    </div>
  );
};

export default MeetLink;
