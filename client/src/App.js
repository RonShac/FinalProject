import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Artists from "./Pages/Artists";

const App = () => {
  // context maybe

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
      </Routes>

      {/* Footer? */}
    </BrowserRouter>
  );
};

export default App;
