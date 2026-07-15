import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

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
              I’m a <b className="purple">Computer Science Engineering</b> student at <b className="purple">SRMIST</b> who enjoys transforming ideas into scalable, intelligent software products. I’m passionate about solving real-world problems through <b className="purple">Software Development</b> and <b className="purple">Artificial Intelligence</b>.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, Java, JavaScript, React.js, Next.js, FastAPI, and SQL{" "}
                </b>
              </i>
              — and I enjoy working across full-stack development and AI-powered applications.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Full-Stack Applications, AI/ML Systems, and Agentic AI Solutions,{" "}
                </b>
              </i>
              and exploring how <b className="purple">Large Language Models</b> can be integrated into practical software products.
              <br />
              <br />
              Whenever possible, I love building impactful projects with{" "}
              <i>
                <b className="purple">React.js, Next.js, and FastAPI</b>
              </i>{" "}
              and modern AI technologies while continuously improving my{" "}
              <i>
                <b className="purple">Data Structures, Algorithms, and System Design</b>
              </i>{" "}
              skills.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
