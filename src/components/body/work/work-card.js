import React from "react";
import "./work-card.css";

function WorkCard({ item }) {
  return (
    <div className="work-card">
      <img src={item.companyLogo} className="work-logo" alt="company logo" />
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <label className="work-title">{item.title}</label>
        <div className="work-dates">
          <label>{item.startDate}</label>-<label>{item.endDate}</label>
        </div>
        <div className="work-desc">
          <p>{item.duties}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
