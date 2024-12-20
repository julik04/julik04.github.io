<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  MainPage,
  StudioPage,
  ReviewsPage,
  FAQPage,
  MastersPage,
  ShopMainPage,
} from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MainPage, StudioPage, ReviewsPage, FAQPage, MastersPage } from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
>>>>>>> b7eb51f4349be13c038629d40e58cf9acebdcf28

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/studio",
    element: <StudioPage />,
  },
  {
    path: "/masters",
    element: <MastersPage />,
  },
  {
    path: "/reviews",
    element: <ReviewsPage />,
  },
  {
    path: "/faq",
    element: <FAQPage />,
  },
<<<<<<< HEAD
  {
    path: "/shopMain",
    element: <ShopMainPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
=======
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
>>>>>>> b7eb51f4349be13c038629d40e58cf9acebdcf28
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
