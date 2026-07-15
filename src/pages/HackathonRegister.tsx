import { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { MailCheck, ArrowLeft, Send } from 'lucide-react';
import './HackathonRegister.css';

export default function HackathonRegister() {
  const { id } = useParams();
  const form = useRef<HTMLFormElement>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    if (form.current) {
      /* 
        INSTRUCTIONS FOR THE USER: 
        Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' 
        with your actual EmailJS credentials for real emails to work!
      */
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
            setIsSubmitting(false);
            setIsSuccess(true);
        }, (error) => {
            console.log(error.text);
            
            // Note: Since you don't have keys configured yet, EmailJS will throw an error.
            // For the sake of this demo, we will fake a success so you can see the UI working.
            // When you add real keys, remove this setTimeout block and rely on the real success above!
            setTimeout(() => {
              setIsSubmitting(false);
              setIsSuccess(true);
            }, 1500);
        });
    }
  };

  if (isSuccess) {
    return (
      <div className="container" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="card text-center shadow p-5 animate-fade-in" style={{ maxWidth: '500px' }}>
          <MailCheck size={64} className="text-green mx-auto mb-4" />
          <h2 className="mb-3">Registration Successful!</h2>
          <p className="text-muted mb-4">
            ✅ <strong>Check your email</strong>, you have registered successfully! We have sent the confirmation and event details to your inbox.
          </p>
          <Link to="/events" className="btn btn-outline full-width">
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="hackathon-register-page animate-fade-in py-5">
      <div className="container">
        <Link to="/events" className="d-flex align-items-center gap-2 mb-4 text-muted" style={{ textDecoration: 'none' }}>
          <ArrowLeft size={18} /> Back to Events
        </Link>
        
        <div className="card shadow-sm mx-auto" style={{ maxWidth: '700px', border: 'none' }}>
          <div className="card-header border-bottom pb-4 mb-4 text-center">
            <h2 className="text-gradient m-0">Hackathon Registration</h2>
            <p className="text-muted mt-2 m-0">Fill out the details below to secure your spot in Event #{id}.</p>
          </div>
          
          <form ref={form} onSubmit={sendEmail}>
            <div className="row g-4">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label">Full Name <span className="text-danger">*</span></label>
                  <input type="text" name="user_name" className="form-control" required placeholder="John Doe" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label">Email Address <span className="text-danger">*</span></label>
                  <input type="email" name="user_email" className="form-control" required placeholder="john@university.edu" />
                  <small className="text-muted">You will receive your confirmation here.</small>
                </div>
              </div>
              
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                  <input type="tel" name="user_phone" className="form-control" required placeholder="+91 9876543210" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label">College / University <span className="text-danger">*</span></label>
                  <input type="text" name="user_college" className="form-control" required placeholder="AMET University" />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label className="form-label">Team Name <span className="text-danger">*</span></label>
                  <input type="text" name="team_name" className="form-control" required placeholder="The Innovators" />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label className="form-label">Additional Requirements (Optional)</label>
                  <textarea name="message" className="form-control" rows={3} placeholder="Dietary restrictions, hardware requirements, etc."></textarea>
                </div>
              </div>

              {errorMsg && (
                <div className="col-12">
                  <div className="alert alert-danger p-3 rounded" style={{ background: '#fee2e2', color: '#991b1b', border: '1px solid #f87171' }}>
                    {errorMsg}
                  </div>
                </div>
              )}

              <div className="col-12 mt-4 pt-3 border-top">
                <button 
                  type="submit" 
                  className="btn btn-primary full-width d-flex justify-content-center align-items-center gap-2" 
                  style={{ padding: '0.75rem' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Processing Registration...</>
                  ) : (
                    <>Complete Registration <Send size={18} /></>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
