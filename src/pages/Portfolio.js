import React, { Component } from "react";
import Project from "../components/Project";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import projects from "../projects.js";

class Portfolio extends Component {
  
    render() {
    return (
      <Wrapper>
        <Title>Portfolio</Title>
        
        {projects.map(projects => (
          <Project
            id={projects.id}
            key={projects.id}
            name={projects.name}
            image={projects.image}
            githublink={projects.githublink}
            deploymentlink={projects.deploymentlink}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Portfolio;
