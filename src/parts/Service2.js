import React from "react";
import styled from "styled-components";

const Service2 = () => {
  return (
    <StyledWrapper>
      <div className="service-header">
        <h1>Our Services</h1>
        <p>We offer the best services for our clients</p>
      </div>
      <div className="service-cards">
        <Card />
        <Card />
        <Card />
      </div>
    </StyledWrapper>
  );
};

const Card = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p className="title">FLIP CARD</p>
          <p>Hover Me</p>
        </div>
        <div className="flip-card-back">
          <p className="title">BACK</p>
          <p>Leave Me</p>
        </div>
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  padding: 2rem;

  .service-header {
    margin-bottom: 2rem;

    h1 {
      font-size: 2em;
      margin: 0;
      color: coral;
    }

    p {
      font-size: 1.2em;
      color: #333;
    }
  }

  .service-cards {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .flip-card {
    background-color: transparent;
    width: 300px; /* Increased width */
    height: 400px; /* Increased height */
    perspective: 1000px;
  }

  .title {
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    margin: 0;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid coral;
    border-radius: 1rem;
  }

  .flip-card-front {
    background: linear-gradient(
      120deg,
      bisque 60%,
      rgb(255, 231, 222) 88%,
      rgb(255, 211, 195) 40%,
      rgba(255, 127, 80, 0.603) 48%
    );
    color: coral;
  }

  .flip-card-back {
    background: linear-gradient(
      120deg,
      rgb(255, 174, 145) 30%,
      coral 88%,
      bisque 40%,
      rgb(255, 185, 160) 78%
    );
    color: white;
    transform: rotateY(180deg);
  }
`;

export default Service2;
