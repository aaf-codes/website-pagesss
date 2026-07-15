import { Link } from 'react-router-dom';
import { Rocket, Mail, Phone, MapPin, MessageCircle, Globe, Camera } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="navbar-logo">
            <Rocket className="logo-icon" />
            <span>AMET <span className="text-gradient">INCUBATION</span></span>
          </Link>
          <p className="footer-desc text-muted">
            Empowering the next generation of innovators. We transform student ideas into successful startups through mentorship, funding, and industry connections.
          </p>
          <div className="social-links">
            <a href="#" className="social-link"><MessageCircle size={20} /></a>
            <a href="#" className="social-link"><Globe size={20} /></a>
            <a href="#" className="social-link"><Camera size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>135, East Coast Road, Kanathur, Chennai, India</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+91 123 456 7890</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>incubation@ametuniv.ac.in</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="text-muted text-center">&copy; {new Date().getFullYear()} AMET Incubation Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
