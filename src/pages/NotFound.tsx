import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center animate-fade-in" style={{ minHeight: '70vh', padding: '2rem' }}>
      <Compass size={80} className="text-primary mb-4 opacity-50" />
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }} className="text-gradient">404</h1>
      <h3 className="mb-3">Page Not Found</h3>
      <p className="text-muted mb-5" style={{ maxWidth: '400px' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary d-flex align-items-center gap-2">
        <ArrowLeft size={18} /> Back to Home
      </Link>
    </div>
  );
}
