import React from "react";
import { FaList, FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import Presenter from "./Presenter";

function PresenterList() {
  const presenterList = [
    {
      id: 1,
      title: "Dr. Demo Presenter",
      topic: "AI Enhanced UAV for search and rescue",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae tellus a justo efficitur dignissim. Quisque vel ex a orci faucibus cursus. ",
      status: "Neither"
    },
    {
      id: 2,
      title: "Dr. Demo Presenter",
      topic: "AI Enhanced UAV for search and rescue",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae tellus a justo efficitur dignissim. Quisque vel ex a orci faucibus cursus. ",
      status: "Neither"
    },
    {
      id: 3,
      title: "Dr. Demo Presenter",
      topic: "AI Enhanced UAV for search and rescue",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae tellus a justo efficitur dignissim. Quisque vel ex a orci faucibus cursus. ",
      status: "Neither"
    },
    {
      id: 4,
      title: "Dr. Demo Presenter",
      topic: "AI Enhanced UAV for search and rescue",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae tellus a justo efficitur dignissim. Quisque vel ex a orci faucibus cursus. ",
      status: "Validated"
    },
    {
      id: 5,
      title: "Dr. Demo Presenter",
      topic: "AI Enhanced UAV for search and rescue",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae tellus a justo efficitur dignissim. Quisque vel ex a orci faucibus cursus. ",
      status: "Deleted"
    },
    {
      id: 6,
      title: "Dr. Demo Presenter",
      topic: "AI Enhanced UAV for search and rescue",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae tellus a justo efficitur dignissim. Quisque vel ex a orci faucibus cursus. ",
      status: "Neither"
    },
    {
      id: 7,
      title: "Dr. Demo Presenter",
      topic: "AI Enhanced UAV for search and rescue",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae tellus a justo efficitur dignissim. Quisque vel ex a orci faucibus cursus. ",
      status: "Validated"
    },
    {
      id: 8,
      title: "Dr. Demo Presenter",
      topic: "AI Enhanced UAV for search and rescue",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae tellus a justo efficitur dignissim. Quisque vel ex a orci faucibus cursus. ",
      status: "Deleted"
    },
  ];

  return (
    <div>
      <div className="presenter-head">
        <span className="presenter-filter">
          <FaList />
        </span>
        <p className="presenter-heading">Presenter Validation</p>
        <hr className="presenter-hr"></hr>
      </div>
      <div className="presenter-views">
        <ul class="view-list">
          <li className="view-item active">All</li>
          <li className="view-item">New</li>
          <li className="view-item">Validated</li>
          <li className="view-item">Deleted</li>
        </ul>
      </div>
      <div className="btn-div">
        <button type="button" class="btn btn-success validate-all-btn">
          <FaCircleCheck className="icon" /> VALIDATE ALL
        </button>
        <button type="button" class="btn btn-danger delete-all-btn">
          <FaCircleXmark className="icon" /> DELETE ALL
        </button>
      </div>
      <div className="presenters-list">
          {
              presenterList.map((presenter)=>{
                return <Presenter id={presenter.id} title={presenter.title} topic={presenter.topic} body={presenter.body} status={presenter.status}  />
              })
          }
      </div>
    </div>
  );
}

export default PresenterList;
