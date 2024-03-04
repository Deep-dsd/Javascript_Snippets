import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { useAppContext } from "../context";

const Projects = () => {
  const { filteredProjects, filterHandler, filterTag } = useAppContext();

  return (
    <Wrapper>
      <h3>My Projects</h3>
      <div className="filter-container">
        <div
          className={`${filterTag === "all" && "active"} btn`}
          onClick={(e) => filterHandler(e.target.id)}
          id="all"
        >
          All
        </div>
        <div
          className={`${filterTag === "react" && "active"} btn`}
          onClick={(e) => filterHandler(e.target.id)}
          id="react"
        >
          React
        </div>
        <div
          className={`${filterTag === "js" && "active"} btn`}
          onClick={(e) => filterHandler(e.target.id)}
          id="js"
        >
          JavaScript
        </div>
      </div>
      <div className="project-container">
        {filteredProjects.map((project) => {
          return <Card key={project.id} {...project} />;
        })}
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
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    padding-bottom: 2rem;
    max-width: 1500px;
  }

  /* @media (min-width: 1433px) {
    .project-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      
    }
  } */
`;
