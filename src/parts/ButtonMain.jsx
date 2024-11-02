import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import styled from "styled-components";

const Button = ({ onClick, children }) => {
  return (
    <StyledWrapper>
      <button type="button" onClick={onClick}>
        {children}
      </button>{" "}
      {/* Set button type */}
    </StyledWrapper>
  );
};

// Add prop validation
Button.propTypes = {
  onClick: PropTypes.func.isRequired, // Expecting a function for onClick
  children: PropTypes.node.isRequired, // Expecting children to be a node
};

const StyledWrapper = styled.div`
  position: fixed; /* Keep it fixed */
  bottom: 20px; /* Distance from the bottom */
  right: 20px; /* Distance from the right */
  z-index: 1000; /* Ensure it's above other content */

  button {
    width: 165px;
    height: 62px;
    cursor: pointer;
    color: #fff;
    font-size: 17px;
    border-radius: 1rem;
    border: none;
    position: relative;
    background: #100720;
    transition: 0.1s;
  }

  button::after {
    content: "";
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      circle farthest-corner at 10% 20%,
      rgba(255, 94, 247, 1) 17.8%,
      rgba(2, 245, 255, 1) 100.2%
    );
    filter: blur(15px);
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
  }

  button:hover {
    transform: scale(0.9) rotate(3deg);
    background: radial-gradient(
      circle farthest-corner at 10% 20%,
      rgba(255, 94, 247, 1) 17.8%,
      rgba(2, 245, 255, 1) 100.2%
    );
    transition: 0.5s;
  }
`;

export default Button;
