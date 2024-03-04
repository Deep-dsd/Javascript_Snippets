import React from "react";
import styled from "styled-components";
import { projectData } from "../data";

const Projects = () => {
  return (
    <Wrapper>
      <h3>My Projects</h3>
      <div className="filter-container">
        <div className="btn active">All</div>
        <div className="btn">React</div>
        <div className="btn">JavaScript</div>
      </div>
      <div className="project-container">
        <div className="card">
          <a href="www.google.com" target="_blank">
            <img src={projectData[0].img} alt="" />
          </a>

          <h4>{projectData[0].name}</h4>
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.section`
  margin: 0 0.5rem;
  background-color: #e2e8f0;
  text-align: center;
  h3 {
    display: inline-block;
    margin: 4rem 0 1.5rem 0;
    font-family: "Inconsolata", monospace;
    font-weight: 400;
    font-size: 3rem;
    position: relative;
  }
  h3::after {
    content: " ";
    position: absolute;
    width: 65%;
    bottom: -8px;
    left: 40px;
    right: 30px;
    background-color: #60c3ea;
    display: block;
    height: 3px;
  }

  .filter-container {
    margin-bottom: 2rem;
    display: flex;
    gap: 0.7rem;
    justify-content: center;
    .btn {
      cursor: pointer;
      border: none;
      font-family: "Inconsolata", monospace;
      padding: 0.5rem 1rem;
      letter-spacing: 1px;
      background-color: #c5e0eb;
      border-radius: 30px;
      font-size: 1rem;
      transition: ease-in 250ms;
      user-select: none;
    }
    .btn:hover {
      background-color: #9dd0e5;
    }
    .active {
      background-color: #9dd0e5;
    }
  }
  .project-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding-bottom: 2rem;
  }

  .card {
    box-shadow: 0 0 10px 0 gray;
    min-width: 300px;
    width: 450px;
    border-radius: 3px;
    transition: ease-in 150ms;
    background-color: white;
    a {
      margin-bottom: 0;
    }
    a img {
      width: 100%;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      margin-bottom: 0;
    }
    h4 {
      font-family: "Inconsolata", monospace;
      font-size: 1.7rem;
      font-weight: 400;
      letter-spacing: 1px;
      text-shadow: 0 0 1px black;
      margin-bottom: 0.5rem;
      user-select: none;
    }
  }

  .card:hover {
    transform: scale(1.006);
  }
`;
