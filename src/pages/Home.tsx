import { Link } from 'react-router-dom';
import { ArrowRight, Users, Rocket, Trophy, Lightbulb, ChevronRight, MessageCircle, Navigation, Factory, Car, Shield, Activity } from 'lucide-react';
import './Home.css';

export default function Home() {
  const stats = [
    { label: 'Startups Supported', value: '45+', icon: <Rocket size={32} /> },
    { label: 'Total Funding Raised', value: '₹12 Cr+', icon: <Trophy size={32} /> },
    { label: 'Jobs Created', value: '300+', icon: <Users size={32} /> },
    { label: 'Patents Filed', value: '80+', icon: <Lightbulb size={32} /> },
  ];

  const focusAreas = [
    { title: 'Life Sciences', icon: <Activity size={32} /> },
    { title: 'Industry 4.0', icon: <Factory size={32} /> },
    { title: 'Smart Mobility', icon: <Car size={32} /> },
    { title: 'Aerospace & Defence', icon: <Shield size={32} /> },
  ];

  const startups = [
    { name: 'EcoTech Solutions', founder: 'Rahul Sharma', sector: 'CleanTech', description: 'AI-driven waste management systems for smart cities.' },
    { name: 'HealthAI', founder: 'Priya Patel', sector: 'HealthTech', description: 'Edge AI diagnostic tools for remote healthcare.' },
    { name: 'MarineRobotics', founder: 'Vikram Singh', sector: 'Maritime Tech', description: 'Autonomous underwater vehicles for hull inspection.' },
  ];

  const programs = [
    { title: 'NIDHI PRAYAS', desc: 'Prototyping grant up to ₹10 Lakhs for young innovators.' },
    { title: 'CSR Incubation', desc: 'Specialized support backed by corporate social responsibility funds.' },
    { title: 'Deep Tech Programs', desc: 'Specialized labs and mentorship for hardware and AI startups.' },
  ];

  return (
    <div className="home-page animate-fade-in">
      
      <section className="hero-section text-center">
        <div className="hero-video-container">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-4171-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
        </div>

        <div className="container hero-content">
          <h1 className="hero-title animate-fade-in">
            Empowering Innovation at <span className="text-gradient" style={{ background: 'linear-gradient(135deg, #60a5fa, #93c5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AMET</span>
          </h1>
          <p className="hero-subtitle">
            The premier technology business incubator nurturing student ideas into globally competitive startups through world-class mentoring, funding, and infrastructure.
          </p>
          <div className="hero-actions justify-content-center">
            <Link to="/signup" className="btn btn-primary btn-lg">
              Apply for Incubation <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="btn btn-outline btn-lg" style={{ color: 'white', borderColor: 'white', background: 'transparent' }}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* 2. About Incubation Centre */}
      <section className="section bg-surface">
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h2 className="mb-4">About AMET Incubation Centre</h2>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>
            We are a university-based technology business incubator dedicated to promoting innovation, entrepreneurship, and industry collaboration. Our mission is to bridge the gap between academia and industry by providing founders with the capital, mentorship, and labs they need to succeed.
          </p>
        </div>
      </section>

      {/* 3. Impact Statistics */}
      <section className="stats-section section bg-primary text-white text-center">
        <div className="container">
          <h2 className="mb-5 text-white">Our Impact</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon-wrapper mx-auto mb-3 text-accent">{stat.icon}</div>
                <div className="stat-value text-white">{stat.value}</div>
                <div className="stat-label" style={{ color: 'rgba(255,255,255,0.8)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technology Focus Areas */}
      <section className="section bg-white text-center">
        <div className="container">
          <h2 className="mb-5">Technology Focus Areas</h2>
          <div className="dashboard-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {focusAreas.map((area, idx) => (
              <div key={idx} className="card py-5 hover-lift">
                <div className="text-primary mb-3">{area.icon}</div>
                <h4 className="m-0">{area.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Programs */}
      <section className="section bg-surface">
        <div className="container">
          <h2 className="mb-5 text-center">Incubation Programs</h2>
          <div className="dashboard-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {programs.map((prog, idx) => (
              <div key={idx} className="card">
                <h3 className="text-primary">{prog.title}</h3>
                <p className="text-muted mb-4">{prog.desc}</p>
                <Link to="/programs" className="text-primary-light font-semibold d-flex align-items-center gap-1">
                  View Details <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Startup Showcase */}
      <section className="section bg-white">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h2 className="m-0">Our Startups</h2>
            <Link to="/portfolio" className="btn btn-outline btn-sm">View All Startups</Link>
          </div>
          <div className="dashboard-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {startups.map((startup, idx) => (
              <div key={idx} className="card">
                <div className="badge badge-blue mb-3">{startup.sector}</div>
                <h3 className="mb-1">{startup.name}</h3>
                <p className="text-sm font-semibold mb-3">Founder: {startup.founder}</p>
                <p className="text-muted">{startup.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Government Recognition / Partners */}
      <section className="section bg-surface text-center">
        <div className="container">
          <h2 className="mb-5">Supported By</h2>
          <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap opacity-50">
            <h3 className="text-muted m-0">[ Ministry of MSME ]</h3>
            <h3 className="text-muted m-0">[ Startup India ]</h3>
            <h3 className="text-muted m-0">[ NITI Aayog ]</h3>
            <h3 className="text-muted m-0">[ DST ]</h3>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="floating-actions">
        <button className="fab whatsapp" title="Contact on WhatsApp">
          <MessageCircle size={24} />
        </button>
        <button className="fab chatbot" title="AI Assistant">
          <Navigation size={24} />
        </button>
      </div>

    </div>
  );
}