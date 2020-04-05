import React from "react";
import "./style.css";

function InfoCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <h3 className="name">{props.name}</h3>
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}<strong>Contact:</strong> {props.contact}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InfoCard;