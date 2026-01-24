import React from "react";
import { trips } from "../../data/TripsData";

import { useNavigate, useParams } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Badge,
  ListGroup,
  Accordion,
} from "react-bootstrap";

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

  const handleBook = () => {
    if (!user) {
      navigate("/auth");
    } else {
      navigate(`/trip/${id}/book`);
    }
  };

  return (
    <>
      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <Image
              src={trip.image}
              alt={trip.name}
              style={{ objectFit: "cover", maxHeight: "500px", width: "100%" }}
              className="shadow-lg rounded-4 mt-4"
            />
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={8}>
            <h2>{trip.name}</h2>
            <p>{trip.destination}</p>

            <div className="mb-3">
              <Badge bg="primary" className="me-2">
                {trip.duration}
              </Badge>
              <Badge bg="secondary" className="me-2">
                ⭐ {trip.rating}
              </Badge>
              <Badge bg="info" className="me-2">
                {trip.difficulty}
              </Badge>
              <Badge bg="success">₹ {trip.price}</Badge>
            </div>

            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Overview</Card.Title>
                <Card.Text>{trip.overview}</Card.Text>
              </Card.Body>
            </Card>

            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Trip Highlights</Card.Title>
                <ListGroup>
                  {trip.highlights.map((item, index) => (
                    <ListGroup.Item key={index}>✅ {item} </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>

            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Day-Wise Itinerary</Card.Title>
                <Accordion flush>
                  {trip.itinerary.map((day, index) => (
                    <Accordion.Item key={index} eventKey={String(index)}>
                      <Accordion.Header>
                        Day {day.day} : {day.title}
                      </Accordion.Header>
                      <Accordion.Body>{day.description}</Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Card.Body>
            </Card>

            <Row className="g-3 mb-4">
              <Col md={6}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <Card.Title>Inclusions</Card.Title>
                    <ListGroup variant="flush">
                      {trip.inclusions.map((item, i) => (
                        <ListGroup.Item key={i}> ✅{item} </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <Card.Title>Exclusions</Card.Title>
                    <ListGroup variant="flush">
                      {trip.exclusions.map((item, i) => (
                        <ListGroup.Item key={i}> ✅{item} </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Card>
              <Card.Body>
                <Card.Title>Best Time To Visit</Card.Title>
                <Card.Text>{trip.bestTimeToVisit}</Card.Text>
              </Card.Body>
            </Card>

            <Button variant="outline-dark" onClick={() => navigate(-1)}>
              ⬅️ Back To Trips
            </Button>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm sticky-top" style={{ top: "90px" }}>
              <Card.Body>
                <h4 className="fw-bold mb-3">₹ {trip.price}</h4>
                <p className="text-muted mb-3">
                  {trip.duration} • {trip.difficulty}
                </p>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-100 mb-2"
                  onClick={handleBook}
                >
                  Book Now
                </Button>

                <Button variant="outline-secondary" className="w-100">
                  Enquire
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TripDetail;
