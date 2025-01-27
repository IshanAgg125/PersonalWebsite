import React from "react";


const Logo = ({children}) => {
    return (
        <div style={{ display: "flex",  flexDirection: "column", justifyContent: "flex-start", alignItems: "center", height: "100vh", paddingTop: "50px"}}>
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
                fontweight="bold"
                dy="0.3em" // Adjust vertical alignment
            >
                IA
            </text>
            <ellipse
                cx="100" // center x-coordinate
                cy="100" // center y-coordinate
                rx="80" // Horizontal radius
                ry="40" // Vertical radius
                fill="none" // vertial radius
                stroke="white"
                strokeWidth="4"
                transform="rotate(140, 100, 100)" // tilt the orbit by 30 degrees
            />
            <ellipse
                cx="100" // center x-coordinate
                cy="100" // center y-coordinate
                rx="80" // Horizontal radius
                ry="40" // Vertical radius
                fill="none" // vertial radius
                stroke="white"
                strokeWidth="4"
                transform="rotate(40, 100, 100)" // tilt the orbit by 30 degrees
            />

            {/* Revolving ball */}
            <circle
                cx="180" // starting x-coordinate of the ball
                cy="100" // starting y-coordinate of the ball
                r="6" // radius of the ball 
                fill="blue" // color of the ball
            >
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    from="0 100 100" // starting rotation around the center of the ellipse
                    to="360 100 100" // complete 360-degree rotation 
                    dur="5s" // Duration of one full ration
                    repeatCount="indefinite" // Infinite looping
                />
            </circle>
            <circle
                cx="180" // starting x-coordinate of the ball
                cy="100" // starting y-coordinate of the ball
                r="6" // radius of the ball 
                fill="red" // color of the ball
            >
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    from="0 100 100" // starting rotation around the center of the ellipse
                    to="360 100 100" // complete 360-degree rotation 
                    dur="7s" // Duration of one full ration
                    repeatCount="indefinite" // Infinite looping
                />
            </circle>
        </svg>
        <div style={{ textAlign: 'center', marginTop: "20px"}}>
            {children}
        </div>

    </div>
    )
}


function AboutMe() {
    return (
        <>
            <Logo>
                <h1>My name is Ishan Aggarwal, and I a Software Engineer and Quant Finance Enthusiast</h1>
                <h1> I am a Temple University graduate </h1>
                <h2> I have a Bachelor of Science degree in Mathematics/Computer Science with a GPA of 3.84</h2>
                <p> I am a passionate and curious learner always willing to take the extra step</p>
                <p> I will be joining Univers Bazefield as a software developer starting 2025</p> 
            </Logo>           
        </>
    );
}

export default AboutMe;