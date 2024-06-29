import React from "react";
import {
  FaCircleUser,
  FaCircleCheck,
  FaCircleXmark,
  FaFileLines,
} from "react-icons/fa6";

function Presenter({ title, topic, body, status }) {
  return (
    <div className="parent-div">
      {status === "Validated" ? (
        <>
        <button type="button" className="btn btn-danger delete-btn-cover">
          <FaCircleXmark className="icon" />{" "}
          {status === "Deleted" ? "DELETED" : "DELETE"}
        </button>
        <p className="more-details-cover">last updated on 28-06-2024 at 13:00 hrs</p>
        </>
      ) : (
        ""
      )}

      {status === "Deleted" ? (
        <>
        <button type="button" className="btn btn-success validate-btn-cover">
          <FaCircleCheck className="icon" />{" "}
          {status === "Validated" ? "VALIDATED" : "VALIDATE"}
        </button>
        <p className="more-details-cover">last updated on 28-06-2024 at 13:00 hrs</p>
        </>
      ) : (
        ""
      )}



      <div className={status === "Neither" ? "presenter" : "presenter cover"}>
        <FaCircleUser className="user-avatar" />
        <button type="button" className="btn btn-success validate-btn">
          <FaCircleCheck className="icon" />{" "}
          {status === "Validated" ? "VALIDATED" : "VALIDATE"}
        </button>
        <button type="button" className="btn btn-danger delete-btn">
          <FaCircleXmark className="icon" />{" "}
          {status === "Deleted" ? "DELETED" : "DELETE"}
        </button>
        <div className="user-details">
          <h3 className="user-title">{title}</h3>
          <p>
            <FaFileLines className="file-icon" /> {topic}
          </p>
          <p>{body}</p>
          <p className="more-details">See details</p>
        </div>
      </div>
    </div>
  );
}

export default Presenter;
