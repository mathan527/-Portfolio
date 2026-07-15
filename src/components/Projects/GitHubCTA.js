import React from "react";
import { BsGithub } from "react-icons/bs";

function GitHubCTA() {
  return (
    <div className="github-cta-section">
      <h2 className="github-cta-heading">
        Want to <strong className="purple">explore more</strong> of my work?
      </h2>
      <p className="github-cta-text">
        Discover more projects, experiments, and open-source contributions on GitHub.
      </p>
      <div>
        <a
          href="https://github.com/mathan527"
          target="_blank"
          rel="noopener noreferrer"
          className="github-cta-btn"
          aria-label="View more projects on Mathan's GitHub profile"
        >
          <BsGithub style={{ fontSize: "1.15em" }} /> &nbsp; View More Projects on GitHub ↗
        </a>
      </div>
    </div>
  );
}

export default GitHubCTA;
