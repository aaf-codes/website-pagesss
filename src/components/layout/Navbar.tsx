import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, LayoutDashboard } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Events', path: '/events' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <Rocket className="logo-icon" />
          <span>AMET <span className="text-gradient">INCUBATION</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="navbar-links desktop-only">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="navbar-actions desktop-only">
          <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
          <Link to="/dashboard" className="btn btn-primary btn-sm">
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="mobile-menu-btn mobile-only"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="mobile-nav animate-fade-in">
          <div className="container">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mobile-nav-actions">
              <Link to="/login" className="btn btn-outline full-width">Login</Link>
              <Link to="/dashboard" className="btn btn-primary full-width">Dashboard</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
