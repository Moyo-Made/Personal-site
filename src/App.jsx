import Pages from "./Pages";
import About from "./components/About";
import CaseStudy from "./components/CaseStudy";
// import Contact from "./components/Contact"
// import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="font-Poppins bg-[#f2f1f1]">
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/case-study" element={<CaseStudy />} />
      </Routes>

      {/* <Contact />
      <Footer /> */}
    </div>
  );
};

export default App;
