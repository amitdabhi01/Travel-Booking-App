import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Routes/Layout";
import Home from "./Components/Home";
import TripsData from "./Components/Pages/Trips";
import TripDetail from "./Components/Pages/TripDetail";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import BookingForm from "./Components/Pages/BookingForm";
import MyBooking from "./Components/Pages/MyBooking";
import Auth from "./Auth/Auth";

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
          element: <TripDetail />,
        },
        {
          path: "auth",
          element: <Auth />,
        },
        {
          element: <ProtectedRoutes />,
          children: [
            {
              path: "trip/:id/book",
              element: <BookingForm />,
            },
            {
              path: "myBooking",
              element: <MyBooking />,
            },
          ],
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
