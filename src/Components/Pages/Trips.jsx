import React from "react";
import { useNavigate } from "react-router-dom";

import { trips } from "../../data/TripsData";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

const TripsData = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container className="mt-5 py-4">
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {trips.map((t) => (
            <Col key={t.id}>
              <Card className="h-100 shadow-sm border-0 trips-card">
                <div className="overflow-hidden">
                  <Card.Img
                    src={t.image}
                    alt={t.name}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>

                <Card.Body>
                  <Card.Title className="mb-3 text-center">
                    {t.name}
                  </Card.Title>
                  <Button
                    variant="outline-primary"
                    className="w-100 mt-auto"
                    onClick={() => navigate(`/trips/${t.id}`)}
                  >
                    View More Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default TripsData;
