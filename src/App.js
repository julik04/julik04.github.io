import "./App.css";
import Header from "./components/Header-Footer/Header.js";
import Slider from "./components/MainPage/Slider/Slider.js";
import Cont from "./components/MainPage/Cont.js";
import Prof from "./components/MainPage/Prof.js";
import Works from "./components/MainPage/Works.js";
import Footer from "./components/Header-Footer/Footer.js";
import AboutStudio from "./components/AboutStudio";
import Workshop from "./components/Workshop";
import TableMast from "./components/Masters/TableMast.js";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Form from "./components/Form";
import ShopMain from "./components/ShopPage/ShopMainPage";
import TestIndex from "./components/MainPage/TestIndex";
import ProductSearch from "./components/ShopPage/ProductSearch.js";
import Login from "./components/Login/Login.js";
import { AuthProvider, useAuth } from "./components/AuthContext.js";

export function MainPage() {
  return (
    <>
      <AuthProvider>
        <Header />
        <main>
          <TestIndex />
          <Cont />
          <Slider />
          <Prof />
          <Works />
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
}

export function StudioPage() {
  return (
    <>
      <AuthProvider>
        <Header />
        <main>
          <AboutStudio />
          <Workshop />
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
}

export function MastersPage() {
  return (
    <>
      <AuthProvider>
        <Header />
        <main>
          <TableMast />
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
}

export function ReviewsPage() {
  return (
    <>
      <AuthProvider>
        <Header />
        <main>
          <Reviews />
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
}

export function FAQPage() {
  return (
    <>
      <AuthProvider>
        <Header />
        <main>
          <FAQ />
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
}

export function FormPage() {
  return (
    <>
      <AuthProvider>
        <main>
          <Form />
        </main>
      </AuthProvider>
    </>
  );
}

export function ShopMainPage() {
  return (
    <>
      <AuthProvider>
        <Header />
        <main>
          <ProductSearch />
          <ShopMain />
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
}
export function LoginPage() {
  return (
    <>
      <AuthProvider>
        <Header />
        <main>
          <Login />
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
}
