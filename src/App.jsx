import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Routes/Layout";
import Home from "./Components/Home";
import TripsData from "./Components/Pages/Trips";
import TripDetail from "./Components/Pages/TripDetail";


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
        {
          path: "trips",
          element: <TripsData />,
        },
        {
          path: "trips/:id",
          element: <TripDetail/>
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
