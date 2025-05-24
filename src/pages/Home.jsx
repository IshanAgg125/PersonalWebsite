import React from "react";
import './home.css'

const Logo = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        paddingTop: "50px",
        background: "linear-gradient(to bottom, #000428, #004e92)",
        color: "white", // Ensure text is readable
        fontFamily: "'Arial', sans-serif", // Consistent font
      }}
    >
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          fill="white"
          textAnchor="middle"
          fontSize="25"
          fontWeight="bold"
          dy="0.3em"
        >
          IA
        </text>
        <ellipse
          cx="100"
          cy="100"
          rx="80"
          ry="40"
          fill="none"
          stroke="white"
          strokeWidth="4"
          transform="rotate(140, 100, 100)"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="80"
          ry="40"
          fill="none"
          stroke="white"
          strokeWidth="4"
          transform="rotate(40, 100, 100)"
        />
        <circle
          cx="180"
          cy="100"
          r="6"
          fill="lightgreen"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="200 100 100"
            to="360 200 200"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="180"
          cy="100"
          r="6"
          fill="red"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="7s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          lineHeight: "1.6", // Improve readability
        }}
      >
        {children}
      </div>
    </div>
  );
};

function Home() {
  return (
    <>
      <Logo>
        <h1>My name is Ishan Aggarwal, and I am a Software Engineer and Quant Finance Enthusiast</h1>
        <h1>I am a Temple University graduate</h1>
        <h2>I have a Bachelor of Science degree in Mathematics/Computer Science with a GPA of 3.84</h2>
        <p>I am a passionate and curious learner always willing to take the extra step</p>
        <p>I will be joining Univers Bazefield as a software developer starting 2025</p>
      </Logo>
    </>
  );
}

export default Home;