import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.techStack && props.techStack.length > 0 && (
          <div
            className="d-flex flex-wrap justify-content-center my-3"
            style={{ gap: "6px" }}
          >
            {props.techStack.slice(0, 5).map((tech, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "rgba(147, 76, 206, 0.25)",
                  border: "1px solid rgba(199, 112, 240, 0.6)",
                  borderRadius: "20px",
                  padding: "3px 12px",
                  fontSize: "0.82rem",
                  color: "#e2bbfd",
                  fontWeight: "500",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div
          className="mt-auto d-flex justify-content-center flex-wrap"
          style={{ gap: "10px" }}
        >
          {props.ghLink && props.ghLink !== "#" && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && props.demoLink !== "#" && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
