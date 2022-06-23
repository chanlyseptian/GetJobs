import React from "react";
import { Card, Badge, Button } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

const Job = ({ job }) => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.title} -{" "}
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge
              className="bg-success"
              style={{
                marginRight: "8px",
              }}
            >
              {job.type}
            </Badge>
            <Badge className="bg-secondary">{job.location}</Badge>
            <div className="mt-2">
              <h5>How to apply : </h5>
              {job.how_to_apply.replace(/(<([^>]+)>)/gi, "")}
            </div>
          </div>

          <img
            className="d-none d-md-block "
            src={"https://source.unsplash.com/random/800x800/"}
            height="50"
          />
        </div>

        <Card.Text className="mt-2">
          <Button>
            View Details
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Job;
