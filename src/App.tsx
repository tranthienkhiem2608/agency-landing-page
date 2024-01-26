import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Main from "./components/Main";
import TestimonialsWrap from "./components/TestimonialsWrap";

function App() {
  return (
    <main className="max-w-full mx-auto relative">
      <Header />
      <Main />
      <About />
      <TestimonialsWrap />
      <Gallery />
      <Footer />
    </main>
  );
}

export default App;
