import { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Upload } from 'lucide-react';
import './Apply.css';

export default function Apply() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    startupName: '',
    problem: '',
    solution: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="apply-page animate-fade-in d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
        <div className="card text-center shadow-lg" style={{ maxWidth: '500px', padding: '3rem' }}>
          <CheckCircle size={64} className="text-success mx-auto mb-4" />
          <h2>Application Submitted!</h2>
          <p className="text-muted mt-3">
            Thank you for applying to the AMET Incubation Centre. Our team will review your application and get back to you within 7-10 business days.
          </p>
          <button className="btn btn-primary mt-4" onClick={() => window.location.href = '/dashboard'}>
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="apply-page animate-fade-in">
      <div className="container" style={{ maxWidth: '800px', padding: '4rem 1rem' }}>
        <div className="text-center mb-5">
          <h1 className="text-gradient">Apply for Incubation</h1>
          <p className="text-muted">Join our next cohort and turn your idea into a successful startup.</p>
        </div>

        <div className="apply-progress mb-5">
          <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>1. Personal Details</div>
          <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>2. Startup Details</div>
          <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>3. Documents</div>
        </div>

        <div className="card shadow-lg p-4 p-md-5">
          <form onSubmit={handleSubmit}>
            
            {step === 1 && (
              <div className="form-step animate-fade-in">
                <h3 className="mb-4">Founder Details</h3>
                <div className="form-group mb-3">
                  <label>Full Name</label>
                  <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                </div>
                <div className="form-group mb-3">
                  <label>Email Address</label>
                  <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                </div>
                <div className="form-group mb-4">
                  <label>Phone Number</label>
                  <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 9876543210" />
                </div>
                <div className="text-end">
                  <button type="button" className="btn btn-primary" onClick={handleNext}>
                    Next Step <ArrowRight size={18} className="ms-2" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="form-step animate-fade-in">
                <h3 className="mb-4">Startup Information</h3>
                <div className="form-group mb-3">
                  <label>Startup Name (or Working Title)</label>
                  <input type="text" className="form-control" name="startupName" value={formData.startupName} onChange={handleChange} required placeholder="My Awesome Startup" />
                </div>
                <div className="form-group mb-3">
                  <label>Problem Statement</label>
                  <textarea className="form-control" name="problem" value={formData.problem} onChange={handleChange} required rows={3} placeholder="What problem are you solving?"></textarea>
                </div>
                <div className="form-group mb-4">
                  <label>Proposed Solution</label>
                  <textarea className="form-control" name="solution" value={formData.solution} onChange={handleChange} required rows={3} placeholder="How does your product solve this problem?"></textarea>
                </div>
                <div className="d-flex justify-content-between">
                  <button type="button" className="btn btn-outline" onClick={handlePrev}>
                    <ArrowLeft size={18} className="me-2" /> Back
                  </button>
                  <button type="button" className="btn btn-primary" onClick={handleNext}>
                    Next Step <ArrowRight size={18} className="ms-2" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="form-step animate-fade-in">
                <h3 className="mb-4">Upload Documents</h3>
                <p className="text-muted mb-4">Please upload your pitch deck or any supporting documents (PDF format, max 5MB).</p>
                
                <div className="upload-area mb-4">
                  <Upload size={48} className="text-muted mb-3" />
                  <h5>Drag and drop your pitch deck here</h5>
                  <p className="text-muted">or click to browse files</p>
                  <input type="file" className="file-input" accept=".pdf" />
                </div>

                <div className="d-flex justify-content-between mt-4">
                  <button type="button" className="btn btn-outline" onClick={handlePrev}>
                    <ArrowLeft size={18} className="me-2" /> Back
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Submit Application <CheckCircle size={18} className="ms-2" />
                  </button>
                </div>
              </div>
            )}

          </form>
        </div>
      </div>
    </div>
  );
}
