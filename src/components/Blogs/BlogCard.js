import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaLinkedinIn } from "react-icons/fa";

function BlogCard(props) {
  const ctaLabel = props.ctaText || "Read Article ↗";
  const displayTitle = props.displayTitle || props.title;

  return (
    <Card className="project-card-view blog-card-view h-100 d-flex flex-column">
      {props.url ? (
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read ${props.title} on ${props.source || "LinkedIn"}`}
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt="blog-cover"
            style={{ height: "230px", objectFit: "cover", cursor: "pointer" }}
            className="blog-img"
          />
        </a>
      ) : (
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="blog-cover"
          style={{ height: "230px", objectFit: "cover" }}
          className="blog-img"
        />
      )}

      <Card.Body className="d-flex flex-column" style={{ padding: "1.5rem" }}>
        {/* Category, Tags & Optional Read/Date info */}
        <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap" style={{ gap: "8px" }}>
          {props.category && (
            <span
              className="purple"
              style={{
                fontWeight: "700",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.6px",
              }}
            >
              {props.category}
            </span>
          )}

          {/* Render readTime / date ONLY conditionally if provided (never placeholder) */}
          {props.readTime && (
            <span
              style={{
                color: "rgba(255, 255, 255, 0.65)",
                fontSize: "0.82rem",
                fontWeight: "500",
              }}
            >
              {props.readTime}
            </span>
          )}
          {props.date && (
            <span
              style={{
                color: "rgba(255, 255, 255, 0.65)",
                fontSize: "0.82rem",
                fontWeight: "500",
              }}
            >
              {props.date}
            </span>
          )}
        </div>

        {/* Source Indicator */}
        {props.sourceText && (
          <div
            className="d-flex align-items-center mb-2"
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "0.82rem",
              fontWeight: "500",
            }}
          >
            <FaLinkedinIn style={{ color: "#0077b5", marginRight: "6px", fontSize: "0.95rem" }} />
            <span>{props.sourceText}</span>
          </div>
        )}

        {/* Article Title linked */}
        {props.url ? (
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read ${props.title} on ${props.source || "LinkedIn"}`}
            style={{ textDecoration: "none" }}
            className="blog-title-link"
          >
            <Card.Title
              style={{
                fontWeight: "600",
                fontSize: "1.3rem",
                color: "white",
                marginBottom: "12px",
                textAlign: "left",
                lineHeight: "1.4",
              }}
            >
              {displayTitle}
            </Card.Title>
          </a>
        ) : (
          <Card.Title
            style={{
              fontWeight: "600",
              fontSize: "1.3rem",
              color: "white",
              marginBottom: "12px",
              textAlign: "left",
              lineHeight: "1.4",
            }}
          >
            {displayTitle}
          </Card.Title>
        )}

        {/* Description */}
        <Card.Text
          style={{
            textAlign: "justify",
            color: "rgba(255, 255, 255, 0.82)",
            fontSize: "0.95rem",
            lineHeight: "1.65",
            marginBottom: "16px",
          }}
        >
          {props.description}
        </Card.Text>

        {/* Tags (1-3 tags displayed cleanly) */}
        {props.tags && props.tags.length > 0 && (
          <div
            className="d-flex flex-wrap mb-4"
            style={{ gap: "6px" }}
          >
            {props.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                style={{
                  backgroundColor: "rgba(147, 76, 206, 0.22)",
                  border: "1px solid rgba(199, 112, 240, 0.5)",
                  borderRadius: "16px",
                  padding: "3px 12px",
                  fontSize: "0.78rem",
                  color: "#e2bbfd",
                  fontWeight: "500",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <div className="mt-auto d-flex justify-content-start">
          {props.url && (
            <Button
              variant="primary"
              href={props.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read ${props.title} on ${props.source || "LinkedIn"}`}
              style={{
                padding: "8px 20px",
                fontWeight: "600",
                fontSize: "0.95rem",
              }}
            >
              {ctaLabel}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
