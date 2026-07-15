import { MapPin, Phone, Mail, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully! Our team will get back to you soon.");
  };

  return (
    <div className="contact-page animate-fade-in">
      <header className="page-header text-center bg-surface pb-5 pt-5">
        <div className="container">
          <h1 className="text-gradient mb-3">Contact Us</h1>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
            Have a question about our incubation programs, partnerships, or events? We'd love to hear from you.
          </p>
        </div>
      </header>

      <section className="section py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-md-5">
              <h3 className="mb-4">Get in Touch</h3>
              <div className="contact-info-card card p-4 shadow-sm mb-4 border-0 bg-surface">
                <div className="d-flex align-items-start mb-4">
                  <MapPin size={24} className="text-primary me-3 flex-shrink-0 mt-1" />
                  <div>
                    <h5>Address</h5>
                    <p className="text-muted mb-0">135, East Coast Road,<br/>Kanathur, Chennai, Tamil Nadu<br/>India - 603112</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-4">
                  <Phone size={24} className="text-primary me-3 flex-shrink-0 mt-1" />
                  <div>
                    <h5>Phone</h5>
                    <p className="text-muted mb-0">+91 123 456 7890<br/>+91 098 765 4321</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <Mail size={24} className="text-primary me-3 flex-shrink-0 mt-1" />
                  <div>
                    <h5>Email</h5>
                    <p className="text-muted mb-0">incubation@ametuniv.ac.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-7">
              <div className="card shadow-sm p-4 p-md-5 border-0">
                <h3 className="mb-4">Send us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <div className="form-group mb-3">
                        <label>Full Name</label>
                        <input type="text" className="form-control" required placeholder="John Doe" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group mb-3">
                        <label>Email Address</label>
                        <input type="email" className="form-control" required placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-3">
                        <label>Subject</label>
                        <select className="form-select form-control" required>
                          <option value="">Select a topic</option>
                          <option value="incubation">Incubation Query</option>
                          <option value="partnership">Partnership</option>
                          <option value="events">Events/Hackathons</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-4">
                        <label>Message</label>
                        <textarea className="form-control" rows={5} required placeholder="How can we help you?"></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100 py-2 d-flex justify-content-center align-items-center">
                        Send Message <Send size={18} className="ms-2" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
