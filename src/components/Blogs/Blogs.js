import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCard";
import Particle from "../Particle";
import { blogPosts } from "./blogData";

function Blogs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Explore Learn <strong className="purple">Build 🚀</strong>
        </h1>
        <h2
          style={{
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "600",
            marginTop: "12px",
            marginBottom: "8px",
          }}
        >
          Mathan's <strong className="purple">Tech Journal</strong>
        </h2>
        <p style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "1.05rem", marginBottom: "35px" }}>
          Deep-dives, architectural blueprints, and engineering articles on AI Systems and Full-Stack Development.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          {blogPosts.map((post) => (
            <Col
              key={post.id}
              md={9}
              lg={7}
              style={{ maxWidth: "720px", width: "100%" }}
              className="project-card"
            >
              <BlogCard
                imgPath={post.imgPath}
                category={post.category}
                title={post.title}
                displayTitle={post.displayTitle}
                description={post.description}
                tags={post.tags}
                sourceText={post.sourceText}
                source={post.source}
                url={post.url}
                ctaText={post.ctaText}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
