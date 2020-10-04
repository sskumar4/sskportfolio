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
          <a target="_blank" href={props.githublink}><strong>Github Link</strong></a>
          </li>
          <li>
          <a target="_blank" href={props.deploymentlink}><strong>Deployed Link</strong></a>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Project;
