import React from "react";
import "./projects.css";
//import Card from Card;

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
          <li>
          <strong>Technologies: {props.technologies}</strong>
          </li>
          <li>
          <strong>Description: {props.description}</strong>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Project;
