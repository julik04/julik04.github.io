import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import {
  MainPage,
  StudioPage,
  ReviewsPage,
  FAQPage,
  MastersPage,
  ShopMainPage,
  LoginPage,
  GraphicSitemapPage,
  TextSitemapPage,
} from "./App";
import { MasterPage } from "./components/Masters/MasterPage";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPageTemplate from "./components/ShopPage/ProductPageTemplate";
import { AdminPanel } from "./components/Admin/AdminPanel";
import { Orders } from "./components/Admin/Orders/Orders";
import Products from "./components/Admin/Products/Products";
import SignUpPage from "./components/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
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
  {
    path: "/shopMain",
    element: <ShopMainPage />,
  },
  {
    path: "/категория/:productInfo",
    element: <ProductPageTemplate />,
  },
  {
    path: "/artist/:artistIndex",
    element: <MasterPage />,
  },
  {
    path: "/sitemap/graphic",
    element: <GraphicSitemapPage />,
  },
  {
    path: "/sitemap/text",
    element: <TextSitemapPage />,
  },
  {
    path: "/admin",
    element: <AdminPanel />,
  },
  {
    path: "/admin/orders",
    element: <Orders />,
  },
  {
    path: "/admin/products",
    element: <Products />,
  },
  // {
  //   path: "/admin/products/create",
  //   element: <Products />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
