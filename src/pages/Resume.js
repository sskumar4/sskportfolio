 import React from "react";
 import myresume from "../myresume.js";
 import Wrapper from "../components/Wrapper";
 import Title from "../components/Title";

 function Resume() {
  return (
    <Wrapper>
      <Title>Resume</Title>
         <div className="container-fluid">
        <img width="100%" alt="resumePage1" src={myresume[0].image} />
        <img width="100%" alt="resumePage2" src={myresume[1].image} />
      </div>
    </Wrapper>
  );
}
export default Resume;