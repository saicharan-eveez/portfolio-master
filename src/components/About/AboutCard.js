import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saicharan Atelly </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently employed as a Digital Marketing Executive and UI/UX Designer at EVeez.
            <br />
            I have completed Bachelor of Degree in Computer Science Engineering at Gokaraju Rangaraju Institute of Engineering and Technology
            Hyderabad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Stories
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Saicharan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
