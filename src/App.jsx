import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Routes/Layout";
import Home from "./Components/Home";

import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <RouterProvider router={router}></RouterProvider>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
