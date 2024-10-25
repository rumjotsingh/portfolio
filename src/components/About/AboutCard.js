import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">RumjotSingh </span>
            from <span className="purple"> Yamuna Nagar,Haryana, India.</span>
            <br />
            <br />
            I am student at Seth Jai Parkash Mukand Lal Institute Of Engineering
            And Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>

            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "All Power is within you.You can do everything and anything"{" "}
          </p>
          <footer className="blockquote-footer">Swami Vivnandaeka</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
