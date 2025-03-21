import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiSolidity,
  SiAdobexd,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiGoogleads,
  SiGoogleanalytics,
  SiTwitter,
  SiLinkedin,
  SiMeta, // Meta icon
  SiCanva, // Canva icon
} from "react-icons/si";
import { FiFigma } from "react-icons/fi"; // Figma icon
import { FaGoogle, FaChartLine } from "react-icons/fa"; // Additional icons for digital marketing

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      {/* Frontend Technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      {/* Backend/Database Technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>

      {/* UI/UX Designing */}
      <Col xs={4} md={2} className="tech-icons">
        <FiFigma /> {/* Figma icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd /> {/* Adobe XD icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator /> {/* Adobe Illustrator icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop /> {/* Adobe Photoshop icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva /> {/* Canva icon */}
      </Col>

      {/* Digital Marketing */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleads /> {/* Google Ads icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleanalytics /> {/* Google Analytics icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGoogle /> {/* Google icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaChartLine /> {/* Analytics icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMeta /> {/* Meta icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTwitter /> {/* Twitter icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinkedin /> {/* LinkedIn icon */}
      </Col>
    </Row>
  );
}

export default Techstack;