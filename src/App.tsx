import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import Home from "./pages/Home";
import A11y from "./pages/A11y";
import About from "./pages/About";
import Agile from "./pages/Agile";
import Biking from "./pages/Biking";
import FootballPage from "./pages/Football";
import { LessonsLearned } from "./pages/LessonsLearned";
import { MobRules } from "./pages/MobRules";
import ReactPage from "./pages/React";

export default function App() {
  
  return (
    <Router>
      <a className="visually-hidden-focusable" href="#main">Skip to main content</a>
      <Header site="burtware.com" />
      <div className="container-fluid">
        <main id="main">
          <div className="container-fluid mt-4 mb-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/a11y/" element={<A11y />} />
              <Route path="/about/" element={<About />} />
              <Route path="/agile/" element={<Agile />} />
              <Route path="/biking/" element={<Biking />} />
              <Route path="/football" element={<FootballPage />} />
              <Route path="/lessonslearned" element={<LessonsLearned />} />
              <Route path="/mobrules/" element={<MobRules />} />
              <Route path="/react" element={<ReactPage />} />
            </Routes>
          </div>
        </main>                
      </div>
      <Footer />
    </Router>
  );
}
