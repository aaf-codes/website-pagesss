import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Lightbulb, TrendingUp, Building2, Briefcase } from 'lucide-react';
import './Programs.css';

export default function Programs() {
  const programsList = [
    {
      id: 'pre-incubation',
      title: 'Pre-Incubation Program',
      icon: <BookOpen size={40} className="text-primary mb-3" />,
      description: 'A 3-month rigorous program for early-stage founders and students to validate their ideas and build a Minimum Viable Product (MVP).',
      features: ['Idea Validation', 'Market Research Support', 'Access to Labs', 'Pitch Deck Preparation'],
    },
    {
      id: 'incubation',
      title: 'Core Incubation',
      icon: <TrendingUp size={40} className="text-primary mb-3" />,
      description: 'A 12-18 month support program for startups with an MVP to achieve product-market fit and generate initial revenue.',
      features: ['Dedicated Mentorship', 'Seed Funding Assistance', 'Legal & Compliance Support', 'Networking Events'],
    },
    {
      id: 'nidhi-prayas',
      title: 'NIDHI PRAYAS Grant',
      icon: <Lightbulb size={40} className="text-primary mb-3" />,
      description: 'Government-backed prototyping grant offering up to ₹10 Lakhs for innovators working on hardware/deep-tech solutions.',
      features: ['Up to ₹10L Grant', 'Prototyping Labs', 'Technical Mentorship', 'IP Rights Guidance'],
    },
    {
      id: 'student-funding',
      title: 'Student Innovation Fund',
      icon: <Briefcase size={40} className="text-primary mb-3" />,
      description: 'A special fund dedicated to AMET students for building academic projects into commercial products.',
      features: ['Micro-grants (₹50k - ₹2L)', 'Faculty Mentorship', 'Credit Equivalency', 'Alumni Network'],
    },
    {
      id: 'co-working',
      title: 'Co-Working & Lab Space',
      icon: <Building2 size={40} className="text-primary mb-3" />,
      description: 'Plug-and-play office space and specialized research labs for hardware and software development.',
      features: ['24/7 Access', 'High-Speed Internet', 'Meeting Rooms', 'Hardware Labs'],
    }
  ];

  return (
    <div className="programs-page animate-fade-in">
      <header className="page-header text-center bg-surface pb-5 pt-5">
        <div className="container">
          <h1 className="text-gradient mb-3">Our Programs</h1>
          <p className="text-muted mx-auto" style={{ maxWidth: '700px', fontSize: '1.1rem' }}>
            Whether you are a student with a bright idea or an early-stage startup looking to scale, AMET Incubation Centre offers tailored programs to accelerate your journey.
          </p>
        </div>
      </header>

      <section className="section py-5">
        <div className="container">
          <div className="row g-4">
            {programsList.map((program) => (
              <div key={program.id} className="col-12 col-md-6 mb-4">
                <div className="card h-100 shadow-sm hover-lift p-4">
                  {program.icon}
                  <h3 className="mb-3">{program.title}</h3>
                  <p className="text-muted mb-4">{program.description}</p>
                  
                  <h5 className="mb-3">Key Features:</h5>
                  <ul className="list-unstyled mb-4">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="mb-2 d-flex align-items-center">
                        <div className="bg-primary-light rounded-circle p-1 me-2" style={{ width: '8px', height: '8px' }}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-3 border-top">
                    <Link to="/apply" className="btn btn-primary w-100 d-flex justify-content-center align-items-center">
                      Apply Now <ArrowRight size={18} className="ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}