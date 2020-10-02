import React from "react";
import "./projects.css";

function Project(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Github:</strong><a href=""> {props.githublink}</a>
          </li>
          <li>
            <strong>Deployment:</strong><a href=""> {props.deploymentlink}</a>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Project;
