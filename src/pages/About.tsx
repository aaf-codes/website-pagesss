import { CheckCircle2, ArrowRight } from 'lucide-react';
import './About.css';

export default function About() {
  const mentors = [
    { name: 'Dr. Rajesh Kumar', role: 'Innovation Head', company: 'TechCorp' },
    { name: 'Priya Sharma', role: 'Startup Advisor', company: 'Venture Partners' },
    { name: 'Anand Iyer', role: 'Tech Lead', company: 'Innovate AI' },
    { name: 'Sarah Thomas', role: 'Marketing Expert', company: 'BrandWorks' },
  ];

  return (
    <div className="about-page animate-fade-in">
      <header className="page-header text-center">
        <div className="container">
          <h1 className="text-gradient">About AMET Incubation</h1>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Fostering innovation and entrepreneurship by providing a robust ecosystem for students and startups to build, scale, and succeed.
          </p>
        </div>
      </header>

      {/* Vision & Mission */}
      <section className="section">
        <div className="container">
          <div className="vision-grid">
            <div className="card vision-card">
              <h3>Our Vision</h3>
              <p className="text-muted">To be a globally recognized hub for innovation, turning student ideas into sustainable enterprises that solve real-world problems.</p>
            </div>
            <div className="card vision-card">
              <h3>Our Mission</h3>
              <ul className="mission-list">
                <li><CheckCircle2 size={20} className="text-gradient" /> Provide state-of-the-art infrastructure.</li>
                <li><CheckCircle2 size={20} className="text-gradient" /> Facilitate mentorship from industry leaders.</li>
                <li><CheckCircle2 size={20} className="text-gradient" /> Assist with seed funding and MSME support.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Incubation Flowchart */}
      <section className="section bg-surface">
        <div className="container text-center">
          <h2 className="mb-4">The Incubation Journey</h2>
          <p className="text-muted mb-5">From an idea to a funded startup, we guide you every step of the way.</p>
          
          <div className="flowchart">
            <div className="flow-step">
              <div className="step-circle">1</div>
              <h4>Application</h4>
              <p className="text-muted text-sm">Submit your business plan and team details.</p>
            </div>
            <ArrowRight className="flow-arrow" size={32} />
            <div className="flow-step">
              <div className="step-circle">2</div>
              <h4>Screening</h4>
              <p className="text-muted text-sm">Pitch to our expert panel for selection.</p>
            </div>
            <ArrowRight className="flow-arrow" size={32} />
            <div className="flow-step">
              <div className="step-circle">3</div>
              <h4>Mentorship</h4>
              <p className="text-muted text-sm">1-on-1 guidance and product development.</p>
            </div>
            <ArrowRight className="flow-arrow" size={32} />
            <div className="flow-step">
              <div className="step-circle">4</div>
              <h4>Funding Support</h4>
              <p className="text-muted text-sm">Connect with MSME schemes & investors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Panel */}
      <section className="section">
        <div className="container text-center">
          <h2 className="mb-5">Our Mentorship Panel</h2>
          <div className="mentors-grid">
            {mentors.map((mentor, index) => (
              <div key={index} className="mentor-card card">
                <div className="mentor-avatar">
                  {mentor.name.charAt(0)}
                </div>
                <h4>{mentor.name}</h4>
                <p className="text-gradient text-sm font-semibold">{mentor.role}</p>
                <p className="text-muted text-sm">{mentor.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
