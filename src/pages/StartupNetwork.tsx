import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, Briefcase, Mail, ArrowRight, LayoutDashboard } from 'lucide-react';
import './StartupNetwork.css';
import { useEffect } from 'react';

export default function StartupNetwork() {
  const navigate = useNavigate();

  useEffect(() => {
    // Only allow access if user is actually a startup role
    const role = localStorage.getItem('userRole');
    if (role !== 'startup') {
      navigate('/dashboard');
    }
  }, [navigate]);

  const networkContacts = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      role: "Lead Mentor - AI/ML",
      company: "TechCorp India",
      location: "Chennai",
      avatar: "RK",
      tags: ["AI", "SaaS", "DeepTech"],
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Angel Investor",
      company: "Venture Catalyst",
      location: "Bangalore",
      avatar: "PS",
      tags: ["Seed Funding", "FinTech", "HealthTech"],
    },
    {
      id: 3,
      name: "Prof. Anandan",
      role: "Faculty Coordinator",
      company: "AMET University",
      location: "Chennai",
      avatar: "AN",
      tags: ["Research", "Hardware", "Patents"],
    },
    {
      id: 4,
      name: "Sarah Chen",
      role: "Marketing Strategist",
      company: "GrowthX",
      location: "Remote",
      avatar: "SC",
      tags: ["Go-to-Market", "B2B Sales", "Branding"],
    }
  ];

  return (
    <div className="network-page animate-fade-in">
      {/* Header Section */}
      <div className="network-header">
        <div className="container">
          <div className="header-content">
            <div>
              <h1 className="mb-2">Startup Networking Hub</h1>
              <p className="text-muted">Connect with mentors, investors, and fellow founders in the AMET ecosystem.</p>
            </div>
            
            <Link to="/dashboard" className="btn btn-primary d-flex align-items-center gap-2">
              <LayoutDashboard size={20} />
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="network-controls mb-5">
          <div className="search-bar card">
            <Search size={20} className="text-muted" />
            <input type="text" placeholder="Search by name, role, or industry..." className="bg-transparent border-0 text-white full-width" />
          </div>
          
          <div className="filter-chips">
            <button className="chip active">All</button>
            <button className="chip">Mentors</button>
            <button className="chip">Investors</button>
            <button className="chip">University Staff</button>
          </div>
        </div>

        <div className="network-grid">
          {networkContacts.map(contact => (
            <div key={contact.id} className="card contact-card">
              <div className="contact-header">
                <div className="contact-avatar">
                  {contact.avatar}
                </div>
                <div>
                  <h3 className="m-0 text-lg">{contact.name}</h3>
                  <p className="text-primary text-sm font-semibold">{contact.role}</p>
                </div>
              </div>
              
              <div className="contact-details mt-4 mb-4">
                <div className="detail-item">
                  <Briefcase size={16} className="text-muted" />
                  <span className="text-sm">{contact.company}</span>
                </div>
                <div className="detail-item mt-2">
                  <MapPin size={16} className="text-muted" />
                  <span className="text-sm">{contact.location}</span>
                </div>
              </div>

              <div className="contact-tags mb-4">
                {contact.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>

              <button className="btn btn-outline full-width">
                <Mail size={16} /> Contact
              </button>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center p-5 card" style={{ background: 'rgba(59, 130, 246, 0.05)' }}>
          <h2 className="mb-3">Ready to track your progress?</h2>
          <p className="text-muted mb-4">Head over to your personalized startup dashboard to manage funding, applications, and performance metrics.</p>
          <Link to="/dashboard" className="btn btn-primary">
            Access My Dashboard <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}