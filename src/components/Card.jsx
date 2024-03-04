import React from "react";
import styled from "styled-components";

const Card = ({ name, img }) => {
  return (
    <Wrapper>
      <div className="img">
        <a href="www.google.com" target="_blank">
          <img src={img} alt={name} />
        </a>
      </div>
      <h4>{name}</h4>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  box-shadow: 0 0 10px 0 gray;
  min-width: 300px;
  width: 450px;
  border-radius: 3px;
  background-color: white;
  .img {
    overflow: hidden;
  }

  a img {
    width: 100%;
    display: block;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    margin-bottom: 0;
    transition: ease-in 150ms;
  }
  h4 {
    font-family: "Inconsolata", monospace;
    font-size: 1.7rem;
    font-weight: 400;
    letter-spacing: 1px;
    text-shadow: 0 0 1px black;
    margin: 0.5rem auto;
    user-select: none;
  }

  a img:hover {
    transform: scale(1.05);
  }

  @media (max-width: 960px) {
    width: 85%;
  }
`;
