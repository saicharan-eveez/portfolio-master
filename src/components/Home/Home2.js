import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming, design, and digital marketing, and I have been passionate about creating impactful solutions ever since. I believe in continuous learning and growth. 🤝
              <br />
              <br />I am proficient in languages like
              <i>
                <b className="purple">Javascript and Java, </b>
              </i>
              and I also have strong skills in <b className="purple">UI/UX Designing</b>, creating intuitive and visually appealing interfaces. Additionally, I am experienced in <b className="purple">Digital Marketing</b>, including SEO, content marketing, Campaign Manager 360 and social media strategies.
              <br />
              <br />
              My field of interest lies in building innovative &nbsp;
              <i>
                <b className="purple">Web and Mobile Applications</b> and
                exploring areas related to{" "}
                <b className="purple">
                  Designing Mobile UI's and Digital Marketing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my skills to develop scalable and user-friendly products using <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Libraries and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              , while also focusing on <b className="purple">user-centric design principles</b> and <b className="purple">data-driven marketing strategies</b> to deliver seamless experiences and drive growth.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="" // Replace with your GitHub link
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="" // Replace with your Twitter link
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sai-charan-atelly-/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/charan_atelly?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;