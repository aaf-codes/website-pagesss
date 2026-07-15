import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import './Events.css';

const UPCOMING_EVENTS = [
  {
    id: 1,
    title: 'Global Hackathon 2026',
    date: '2026-08-15T09:00:00',
    type: 'Hackathon',
    location: 'Main Auditorium, AMET',
    desc: 'A 48-hour coding marathon to solve maritime and logistics challenges using AI.',
  },
  {
    id: 2,
    title: 'Startup Pitch Day',
    date: '2026-09-01T14:00:00',
    type: 'Pitch Event',
    location: 'Virtual / Zoom',
    desc: 'Pitch your startup to top tier VCs and angel investors from across the country.',
  }
];

const PAST_EVENTS = [
  {
    id: 3,
    title: 'Founder Series: Scaling 10x',
    date: '2026-05-10',
    type: 'Workshop',
    location: 'Incubation Center',
  },
  {
    id: 4,
    title: 'Web3 & Blockchain Basics',
    date: '2026-04-22',
    type: 'Seminar',
    location: 'Seminar Hall 2',
  },
  {
    id: 5,
    title: 'Design Thinking Bootcamp',
    date: '2026-03-15',
    type: 'Bootcamp',
    location: 'Design Lab',
  }
];

export default function Events() {
  const [timeLeft, setTimeLeft] = useState<{ [key: number]: any }>({});

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft: { [key: number]: any } = {};
      
      UPCOMING_EVENTS.forEach(event => {
        const difference = +new Date(event.date) - +new Date();
        
        if (difference > 0) {
          newTimeLeft[event.id] = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
      });
      
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="events-page animate-fade-in">
      <header className="page-header text-center">
        <div className="container">
          <h1 className="text-gradient">Events & Happenings</h1>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Join our hackathons, workshops, and pitch days. Network with industry leaders and accelerate your growth.
          </p>
        </div>
      </header>

      {/* Live & Upcoming Events */}
      <section className="section">
        <div className="container">
          <h2 className="section-title mb-5">Upcoming Events</h2>
          <div className="upcoming-events-grid">
            {UPCOMING_EVENTS.map(event => (
              <div key={event.id} className="card event-card featured-event">
                <div className="event-badge">{event.type}</div>
                <h3>{event.title}</h3>
                <p className="text-muted mb-4">{event.desc}</p>
                
                <div className="event-meta">
                  <div className="meta-item">
                    <Calendar size={18} className="text-primary" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={18} className="text-primary" />
                    <span>{new Date(event.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={18} className="text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="countdown">
                  {timeLeft[event.id] ? (
                    <>
                      <div className="time-box">
                        <span className="time-val">{timeLeft[event.id].days}</span>
                        <span className="time-label">Days</span>
                      </div>
                      <div className="time-box">
                        <span className="time-val">{timeLeft[event.id].hours}</span>
                        <span className="time-label">Hrs</span>
                      </div>
                      <div className="time-box">
                        <span className="time-val">{timeLeft[event.id].minutes}</span>
                        <span className="time-label">Mins</span>
                      </div>
                      <div className="time-box">
                        <span className="time-val">{timeLeft[event.id].seconds}</span>
                        <span className="time-label">Secs</span>
                      </div>
                    </>
                  ) : (
                    <div className="live-badge">LIVE NOW</div>
                  )}
                </div>

                <Link to={`/register/hackathon/${event.id}`} className="btn btn-primary full-width mt-4 text-center text-decoration-none d-block">
                  Register Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title mb-5">Past Events Archive</h2>
          <div className="past-events-list">
            {PAST_EVENTS.map(event => (
              <div key={event.id} className="past-event-item">
                <div className="past-event-date">
                  <span className="day">{new Date(event.date).getDate()}</span>
                  <span className="month">{new Date(event.date).toLocaleString('en-US', { month: 'short' })}</span>
                </div>
                <div className="past-event-content">
                  <h4>{event.title}</h4>
                  <div className="event-meta small">
                    <span className="badge badge-purple">{event.type}</span>
                    <span className="text-muted"><MapPin size={14} /> {event.location}</span>
                  </div>
                </div>
                <button className="btn btn-outline btn-sm">
                  View Recap <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
