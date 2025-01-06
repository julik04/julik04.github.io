import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Cont from "./components/Cont";
import Prof from "./components/Prof";
import Works from "./components/Works";
import Footer from "./components/Footer";
import AboutStudio from "./components/AboutStudio";
import Workshop from "./components/Workshop";
import TableMast from "./components/TableMast";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Form from "./components/Form";
import ShopMain from "./components/ShopMainPage";

export function MainPage() {
  return (
    <>
      <Header />
      <main>
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
        <ShopMain />
      </main>
      <Footer />
    </>
  );
}
