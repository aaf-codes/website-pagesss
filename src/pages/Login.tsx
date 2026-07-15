import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Rocket, CheckCircle2 } from 'lucide-react';
import './Login.css';

type Role = 'student' | 'startup' | 'member' | 'admin';

export default function Login() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<Role>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('userRole', selectedRole);
      localStorage.setItem('userEmail', email);
      setIsSuccess(true);
    }
  };

  return (
    <div className="auth-page animate-fade-in">
      <div className="auth-card card">
        <div className="auth-header text-center">
          <Link to="/home" className="auth-logo justify-content-center d-flex align-items-center gap-2">
            <Rocket className="logo-icon" size={28} style={{ color: 'var(--color-primary-light)' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>AMET <span className="text-gradient">INCUBATION</span></span>
          </Link>
          <h3 className="mt-4 mb-2">Welcome back</h3>
          <p className="text-muted text-sm m-0">Please enter your details to sign in.</p>
        </div>

        {isSuccess ? (
          <div className="success-container text-center py-5">
            <CheckCircle2 size={56} className="text-green mx-auto mb-3" style={{ color: '#10b981' }} />
            <h3 className="mb-2">Success!</h3>
            <p className="text-muted text-sm m-0">Redirecting to your dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleLoginSubmit} className="auth-form mt-4">
            <div className="form-group mb-4">
              <label className="auth-label">Login as</label>
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
              <input 
                type="password" id="password" 
                value={password} onChange={(e) => setPassword(e.target.value)}
                className="form-control" placeholder="••••••••" required 
              />
            </div>

            <button type="submit" className="btn btn-primary full-width">Sign In</button>
          </form>
        )}

        {!isSuccess && (
          <p className="text-center text-muted text-sm mt-4 pt-4 border-top m-0">
            Don't have an account? <Link to="/signup" className="text-primary font-semibold">Sign up</Link>
          </p>
        )}
      </div>
    </div>
  );
}