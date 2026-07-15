import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import GitHubCTA from "./GitHubCTA";
import Particle from "../Particle";
import infinityHelix from "../../Assets/Projects/infinity_helix.png";
import insurnova from "../../Assets/Projects/insurnova.png";
import proctolearn from "../../Assets/Projects/proctolearn.png";
import nichelyAi from "../../Assets/Projects/nichely_ai.png";
import incidentAi from "../../Assets/Projects/incident_ai.png";
import emotiondex from "../../Assets/Projects/emotiondex.png";

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
              imgPath={infinityHelix}
              isBlog={false}
              title="Infinity Helix"
              description="AI-powered healthcare intelligence platform that analyzes medical reports, prescriptions, and clinical documents using OCR, NLP, and Large Language Models. Extracts medical metrics, identifies potential health risks, generates personalized insights, and provides multilingual AI-powered assistance."
              techStack={["Python", "FastAPI", "Supabase", "BioBERT", "Groq LLM"]}
              ghLink="https://github.com/mathan527/Infinity-Helix-"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insurnova}
              isBlog={false}
              title="Insurnova"
              description="AI-powered parametric insurance platform designed to provide faster and more transparent insurance protection. Automates risk assessment, policy management, real-world event monitoring, and claim processing using intelligent workflows and data-driven insurance models."
              techStack={["AI/ML", "Full Stack", "APIs", "Database", "Automation"]}
              ghLink="https://github.com/mathan527/InsurNova-"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proctolearn}
              isBlog={false}
              title="PROCTOLEARN"
              description="AI-powered learning and examination platform that combines personalized learning with an integrated online proctoring system. Supports AI-assisted education, secure assessments, automated monitoring, and concurrent online examinations for scalable digital learning environments."
              techStack={["Vue.js", "AI", "Proctoring", "Web Dev", "EdTech"]}
              ghLink="https://github.com/mathan527/PROCTOLEARN"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nichelyAi}
              isBlog={false}
              title="Nichely AI"
              description="AI-powered startup intelligence platform that analyzes Reddit communities to discover user pain points, emerging trends, and underserved market opportunities. Uses NLP, sentiment analysis, data processing, and Large Language Models to transform community discussions into data-driven startup ideas and actionable insights."
              techStack={["Python", "FastAPI", "Supabase", "NLP", "LLMs"]}
              ghLink="https://github.com/mathan527/Nichely.ai"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={incidentAi}
              isBlog={false}
              title="Incident AI"
              description="AI-powered incident intelligence and sub-second neural triage platform for enterprise SRE teams. Integrates live telemetry, autonomous anomaly detection, neural root-cause analysis (RCA), architectural blast radius mapping, and pgvector RAG memory indexing to automate triage and incident response workflows."
              techStack={["Next.js", "TypeScript", "Groq LPU", "Supabase", "pgvector"]}
              ghLink="https://github.com/mathan527/Incident-AI"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotiondex}
              isBlog={false}
              title="Sentimora"
              description="Pokémon-themed AI customer support co-pilot that combines real-time sentiment analysis with context-aware Large Language Model responses. Detects customer emotions, adapts AI-generated replies based on sentiment, and delivers an interactive customer support experience through a Pokémon-inspired interface. (Collaborated on development with @chs018; preserved under MIT License attribution)."
              techStack={["Node.js", "Express.js", "Groq AI", "NLP", "JavaScript"]}
              ghLink="https://github.com/mathan527/Sentimora"
              demoLink=""
            />
          </Col>
        </Row>
        <GitHubCTA />
      </Container>
    </Container>
  );
}

export default Projects;
