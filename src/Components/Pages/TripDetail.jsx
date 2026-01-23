import React from "react";
import { trips } from "../../data/TripsData";

import { useNavigate, useParams } from "react-router-dom";

import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

const TripDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const trip = trips.find((t) => t.id === Number(id));

  if (!trip) {
    return (
      <Container className="py-4 text-center">
        <h4>Trips Not Found..</h4>
        <Button onClick={() => navigate(-1)} variant="primary">
          Back To Trips
        </Button>
      </Container>
    );
  }

  return (
    <>
      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <Image
              src={trips.image}
              alt={trips.name}
              fluid
              style={{ objectFit: "cover", maxHeight: "500px" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TripDetail;
