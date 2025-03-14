import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header /> {/* Always visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer /> {/* Always visible on all pages */}
    </>
  );
}

export default App;
