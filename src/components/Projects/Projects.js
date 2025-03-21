import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import plangradoverseas from "../../Assets/Projects/plangradoverseas.png";
import takecarebharath from "../../Assets/Projects/takecarebharath.png";
import eveez from "../../Assets/Projects/eveez.png";
import paymentDashboard from "../../Assets/Projects/payment-dashboard.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plangradoverseas}
              isBlog={false}
              title="Plangradoverseas Visa Consultancy"
              description="Developed and designed a comprehensive website for Plangradoverseas, a visa consultancy firm. The website provides information about visa services, consultation booking, and client testimonials. Built with modern web technologies for a seamless user experience."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={takecarebharath}
              isBlog={false}
              title="Takecare Bharath Medical Platform"
              description="Designed and developed a medical platform connecting patients, doctors, nurses, and medical technicians. Features include appointment scheduling, telemedicine, medical records management, and real-time communication. Built with scalability and user-friendliness in mind."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eveez}
              isBlog={false}
              title="EVeez Landing Pages"
              description="Designed and developed marketing landing pages for EVeez, an electric vehicle rental service. The pages are optimized for conversions, with a focus on user engagement and lead generation. Built with responsive design principles for all devices."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paymentDashboard}
              isBlog={false}
              title="Payment Admin Dashboard"
              description="Designed a payment administration dashboard for managing transactions, user accounts, and financial reports. The dashboard features a clean and intuitive UI, with advanced filtering and analytics capabilities. Built with React and integrated with backend APIs."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;