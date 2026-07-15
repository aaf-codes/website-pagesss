import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Rocket, CheckCircle2 } from 'lucide-react';
import './Login.css';

type Role = 'student' | 'startup' | 'member' | 'admin';

export default function Signup() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<Role>('student');
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        if (selectedRole === 'startup') navigate('/startup-network');
        else navigate('/dashboard');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, navigate, selectedRole]);

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem('userRole', selectedRole);
      localStorage.setItem('userEmail', email);
      setIsSuccess(true);
    }
  };

  return (
    <div className="auth-page animate-fade-in">
      <div className="auth-card card" style={{ maxWidth: '500px' }}>
        <div className="auth-header text-center">
          <Link to="/home" className="auth-logo justify-content-center d-flex align-items-center gap-2">
            <Rocket className="logo-icon" size={28} style={{ color: 'var(--color-primary-light)' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>AMET <span className="text-gradient">INCUBATION</span></span>
          </Link>
          <h3 className="mt-4 mb-2">Create an account</h3>
          <p className="text-muted text-sm m-0">Join the AMET ecosystem today.</p>
        </div>

        {isSuccess ? (
          <div className="success-container text-center py-5">
            <CheckCircle2 size={56} className="text-green mx-auto mb-3" style={{ color: '#10b981' }} />
            <h3 className="mb-2">Success!</h3>
            <p className="text-muted text-sm m-0">Redirecting to your portal...</p>
          </div>
        ) : (
          <form onSubmit={handleSignupSubmit} className="auth-form mt-4">
            
            <div className="form-group mb-4">
              <label className="auth-label">I am joining as a:</label>
              <div className="role-tabs">
                {(['student', 'startup', 'member', 'admin'] as Role[]).map((r) => (
                  <button
                    key={r}
                    type="button"
                    className={`role-tab ${selectedRole === r ? 'active' : ''}`}
                    onClick={() => setSelectedRole(r)}
                  >
                    {r.charAt(0).toUpperCase() + r.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {selectedRole === 'student' && (
              <div className="form-group mb-3">
                <label className="auth-label">Full Name</label>
                <input type="text" className="form-control" placeholder="e.g. Alex Johnson" required />
              </div>
            )}

            {selectedRole === 'startup' && (
              <>
                <div className="form-group mb-3">
                  <label className="auth-label">Company Name</label>
                  <input type="text" className="form-control" placeholder="e.g. EcoTech Solutions" required />
                </div>
                <div className="form-group mb-3">
                  <label className="auth-label">Industry</label>
                  <select className="form-control" required>
                    <option value="">Select Industry</option>
                    <option value="HealthTech">HealthTech</option>
                    <option value="CleanTech">CleanTech</option>
                    <option value="FinTech">FinTech</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </>
            )}

            {selectedRole === 'member' && (
              <>
                <div className="form-group mb-3">
                  <label className="auth-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="e.g. Capt. Rahul Sharma" required />
                </div>
                <div className="form-group mb-3">
                  <label className="auth-label">Domain of Expertise</label>
                  <select className="form-control" required>
                    <option value="">Select Domain</option>
                    <option value="MaritimeTech">Maritime Technology</option>
                    <option value="Logistics">Shipping & Logistics</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </>
            )}

            <div className="form-group mb-3">
              <label htmlFor="email" className="auth-label">Email Address</label>
              <input 
                type="email" id="email" 
                value={email} onChange={(e) => setEmail(e.target.value)}
                className="form-control" placeholder="Enter your email" required 
              />
            </div>
            
            <div className="form-group mb-4">
              <label htmlFor="password" className="auth-label">Password</label>
              <input type="password" id="password" className="form-control" placeholder="Create a password" required />
            </div>

            {selectedRole === 'member' && (
              <div className="form-group mb-4" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <input type="checkbox" id="rules" required style={{ marginTop: '0.25rem', width: '16px', height: '16px' }} />
                <label htmlFor="rules" className="text-muted text-sm m-0">
                  I agree to the <strong className="text-primary">Incubation Rules</strong> & Code of Conduct.
                </label>
              </div>
            )}

            <button type="submit" className="btn btn-primary full-width">Create Account</button>
          </form>
        )}

        {!isSuccess && (
          <p className="text-center text-muted text-sm mt-4 pt-4 border-top m-0">
            Already have an account? <Link to="/login" className="text-primary font-semibold">Sign in</Link>
          </p>
        )}
      </div>
    </div>
  );
}