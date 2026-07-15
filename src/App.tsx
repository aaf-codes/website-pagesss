import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Events from './pages/Events';
import News from './pages/News';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Apply from './pages/Apply';
import Signup from './pages/Signup';
import Programs from './pages/Programs';
import Team from './pages/Team';
import Contact from './pages/Contact';
import StartupNetwork from './pages/StartupNetwork';
import HackathonRegister from './pages/HackathonRegister';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/network" element={<StartupNetwork />} />
          <Route path="/register/hackathon/:id" element={<HackathonRegister />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;