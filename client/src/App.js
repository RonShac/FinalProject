import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/Navbar";

import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import Artists from "./Pages/Artists";
import ArtistDetails from "./Pages/ArtistDetails";
import Events from "./Pages/Events";
import EventDetails from "./Pages/EventDetails";
import Checkout from "./Pages/Checkout";
import Confirmation from "./Pages/Confirmation";

const App = () => {
  // context maybe

  return (
    <>
      
      <GlobalStyles />
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home useSlider={true} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/artists/:id" element={<ArtistDetails />} />
        <Route path="/events/:id/buy/:type" element={<Checkout />} />
      </Routes>

      {/* Footer? */}
    </>
  );
};

export default App;
