import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const calendarTheme = {
  level0: "#161b22",
  level1: "#4d2b6b",
  level2: "#7539a8",
  level3: "#9d52de",
  level4: "#c770f0",
};

class GithubCalendarErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function Github() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setHasError(false);

    fetch("https://github-contributions-api.jogruber.de/v4/mathan527?y=last")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch contribution data");
        }
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          if (data && data.contributions && Array.isArray(data.contributions)) {
            setIsLoading(false);
          } else {
            setHasError(true);
            setIsLoading(false);
          }
        }
      })
      .catch((err) => {
        if (isMounted) {
          setHasError(true);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const fallbackUI = (
    <div className="github-error-container" role="alert" aria-live="polite">
      <p className="github-error-text">Unable to load GitHub contributions right now.</p>
      <a
        href="https://github.com/mathan527"
        target="_blank"
        rel="noopener noreferrer"
        className="github-profile-cta"
        aria-label="View mathan527 GitHub profile on GitHub (opens in new tab)"
      >
        View GitHub Profile ↗
      </a>
    </div>
  );

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      <div className="github-calendar-section">
        {isLoading ? (
          <div className="github-loading-text" role="status" aria-live="polite">
            Loading GitHub contributions...
          </div>
        ) : hasError ? (
          fallbackUI
        ) : (
          <GithubCalendarErrorBoundary fallback={fallbackUI}>
            <div className="github-calendar-wrapper">
              <GitHubCalendar
                username="mathan527"
                blockSize={15}
                blockMargin={5}
                theme={calendarTheme}
                fontSize={16}
              />
            </div>
          </GithubCalendarErrorBoundary>
        )}

        <div className="github-cta-container">
          <a
            href="https://github.com/mathan527"
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile-cta"
            aria-label="View mathan527 GitHub profile on GitHub (opens in new tab)"
          >
            View GitHub Profile ↗
          </a>
        </div>
      </div>
    </Row>
  );
}

export default Github;
