import { useState } from 'react';
import { X, Handshake } from 'lucide-react';
import './Portfolio.css';

const STARTUPS = [
  { id: 1, name: 'EcoTech Solutions', industry: 'CleanTech', desc: 'Sustainable energy management for smart cities.', logo: 'ES' },
  { id: 2, name: 'HealthAI', industry: 'HealthTech', desc: 'AI-driven diagnostics for early disease detection.', logo: 'HA' },
  { id: 3, name: 'FinFlow', industry: 'FinTech', desc: 'Democratizing cross-border payments for freelancers.', logo: 'FF' },
  { id: 4, name: 'AgriSense', industry: 'AgriTech', desc: 'IoT sensors for precision agriculture and crop monitoring.', logo: 'AS' },
  { id: 5, name: 'EduVerse', industry: 'EdTech', desc: 'Immersive VR learning experiences for STEM education.', logo: 'EV' },
  { id: 6, name: 'SecureChain', industry: 'Web3', desc: 'Blockchain-based supply chain transparency platform.', logo: 'SC' },
];

const INDUSTRIES = ['All', 'CleanTech', 'HealthTech', 'FinTech', 'AgriTech', 'EdTech', 'Web3'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStartup, setSelectedStartup] = useState<string | null>(null);

  const filteredStartups = activeFilter === 'All' 
    ? STARTUPS 
    : STARTUPS.filter(s => s.industry === activeFilter);

  const handleCollaborate = (startupName: string) => {
    setSelectedStartup(startupName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStartup(null);
  };

  return (
    <div className="portfolio-page animate-fade-in">
      <header className="page-header text-center">
        <div className="container">
          <h1 className="text-gradient">Our Startup Portfolio</h1>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Discover the innovative companies born out of the AMET Incubation Centre. Connect and collaborate to build the future together.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          {/* Filters */}
          <div className="filters-container">
            {INDUSTRIES.map(industry => (
              <button
                key={industry}
                className={`filter-btn ${activeFilter === industry ? 'active' : ''}`}
                onClick={() => setActiveFilter(industry)}
              >
                {industry}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="portfolio-grid">
            {filteredStartups.map(startup => (
              <div key={startup.id} className="card startup-card">
                <div className="startup-header">
                  <div className="startup-logo">{startup.logo}</div>
                  <span className="badge badge-blue">{startup.industry}</span>
                </div>
                <h3 className="startup-name">{startup.name}</h3>
                <p className="startup-desc text-muted">{startup.desc}</p>
                <button 
                  className="btn btn-outline full-width"
                  onClick={() => handleCollaborate(startup.name)}
                >
                  <Handshake size={18} /> Collaborate
                </button>
              </div>
            ))}
          </div>

          {filteredStartups.length === 0 && (
            <div className="text-center text-muted" style={{ padding: '4rem 0' }}>
              No startups found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Collaborate Modal */}
      {isModalOpen && (
        <div className="modal-overlay animate-fade-in" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Collaborate with {selectedStartup}</h3>
              <button className="modal-close" onClick={handleCloseModal}><X size={24} /></button>
            </div>
            <div className="modal-body">
              <form className="collaborate-form" onSubmit={(e) => { e.preventDefault(); handleCloseModal(); alert('Collaboration request sent!'); }}>
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" className="form-input" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" className="form-input" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label>Nature of Interest</label>
                  <select className="form-input" required>
                    <option value="">Select an option</option>
                    <option value="investment">Investment</option>
                    <option value="mentorship">Mentorship</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="career">Career / Internship</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea className="form-input" rows={4} placeholder="How would you like to collaborate?" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary full-width">Send Request</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
