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

export function MainPage() {
  return (
    <>
      <Header />
      <main>
        <TestIndex />
        <Cont />
        <Slider />
        <Prof />
        <Works />
      </main>
      <Footer />
    </>
  );
}

export function StudioPage() {
  return (
    <>
      <Header />
      <main>
        <AboutStudio />
        <Workshop />
      </main>
      <Footer />
    </>
  );
}

export function MastersPage() {
  return (
    <>
      <Header />
      <main>
        <TableMast />
      </main>
      <Footer />
    </>
  );
}

export function ReviewsPage() {
  return (
    <>
      <Header />
      <main>
        <Reviews />
      </main>
      <Footer />
    </>
  );
}

export function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export function FormPage() {
  return (
    <>
      <main>
        <Form />
      </main>
    </>
  );
}

export function ShopMainPage() {
  return (
    <>
      <Header />
      <main>
        <ProductSearch />
        <ShopMain />
      </main>
      <Footer />
    </>
  );
}
