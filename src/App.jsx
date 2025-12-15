import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/about";

export default function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">

        <Header />

        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}
