/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Contact from './pages/Contact';
import Registration from './pages/registrationPages/AllRegistration';
import HindiBhashaProgram from './pages/registrationPages/HindiBhashaProgram';
import HindiLanguageProgram from './pages/registrationPages/HindiLanguageProgram';
import BBPMarathi from './pages/registrationPages/BBPMarathi';
import BBPGujarati from './pages/registrationPages/BBPGujarati';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-amber-50 text-slate-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />           
            <Route path="/registration" element={<Registration />} />
            <Route path="/registration/hindi-bhasha-program" element={<HindiBhashaProgram />} />
            <Route path="/registration/hindi-language-program" element={<HindiLanguageProgram />} />
            <Route path="/registration/bbp-marathi" element={<BBPMarathi />} />
            <Route path="/registration/bbp-gujrati" element={<BBPGujarati />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
