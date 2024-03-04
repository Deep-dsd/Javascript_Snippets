import styled from "styled-components";
import Projects from "./components/Projects";
import hero_image from "./assets/hero_img.svg";
import { useAppContext } from "./context";
function App() {
  return (
    <main>
      <Wrapper>
        <div className="text-container">
          <h3 className="heading">My Projects</h3>
          <p className="intro-para">
            Projets are the most practical way to learn any language. This is a
            collection of some basic and intermediate level projects using
            <span>React</span> and <span>JavaScript</span>.
          </p>
        </div>
        <img src={hero_image} alt="hero image" className="hero-img" />
      </Wrapper>
      <Projects />
    </main>
  );
}

export default App;

const Wrapper = styled.section`
  margin: 5rem 1rem;
  .heading {
    font-family: "Inconsolata", monospace;
    font-weight: 400;
    font-size: 4rem;
    margin-bottom: 1rem;
    display: inline-block;
    position: relative;
  }
  .heading::before {
    content: " ";
    position: absolute;
    display: block;
    background-color: #87cfebb4;
    z-index: -10;
    top: 35px;
    bottom: 5px;
    left: 30px;
    right: -15px;
  }
  .intro-para {
    letter-spacing: 1px;
    line-height: 2rem;
    font-size: 1.2rem;
    color: #2e2c3b;
    span {
      font-style: italic;
      font-weight: 700;
      display: inline-block;
      position: relative;
    }
    span::after {
      content: " ";
      position: absolute;
      display: block;
      width: 90%;
      height: 2px;
      bottom: 4px;
      background-color: #055f82b4;
    }
  }

  .hero-img {
    display: none;
    width: 400px;
  }

  @media (max-width: 390px) {
    .heading {
      font-size: 3.5rem;
    }
  }

  @media (min-width: 980px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    .hero-img {
      display: block;
    }
    .text-container {
      width: 45%;
      max-width: 50%;
    }
  }
`;
