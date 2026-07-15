import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, CalendarDays, Award, Settings, BarChart3, Users, Briefcase, MessageSquare, ClipboardList, Download, FileText, Bell, Shield, User, Camera, CheckCircle2, Rocket } from 'lucide-react';
import './Dashboard.css';

export default function Dashboard() {
  const [role, setRole] = useState<'student' | 'startup' | 'member' | 'admin' | null>(null);
  const [userName, setUserName] = useState('');
  const [activeTab, setActiveTab] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedRole = localStorage.getItem('userRole');
    const savedEmail = localStorage.getItem('userEmail');
    
    if (!savedRole) {
      navigate('/login');
    } else {
      const currentRole = savedRole as 'student' | 'startup' | 'member' | 'admin';
      setRole(currentRole);
      
      if (savedEmail) {
        const namePart = savedEmail.split('@')[0];
        setUserName(namePart.charAt(0).toUpperCase() + namePart.slice(1));
      } else {
        setUserName(currentRole === 'student' ? 'Student' : currentRole === 'startup' ? 'Startup' : currentRole === 'member' ? 'Member' : 'Admin');
      }

      // Default tab is now profile for everyone to see their specific details immediately
      if (!activeTab) {
        setActiveTab('profile');
      }
    }
  }, [navigate, activeTab]);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  // --- MOCK DATA ---
  const studentEvents = [
    { id: 1, title: 'AI Hackathon 2026', status: 'Registered', date: 'Aug 15, 2026' },
    { id: 2, title: 'Web3 Seminar', status: 'Attended', date: 'Apr 22, 2026' },
  ];

  const certificates = [
    { id: 1, title: 'Web3 Seminar Completion', date: 'Apr 22, 2026' },
    { id: 2, title: 'Intro to Robotics Bootcamp', date: 'Jan 10, 2026' },
  ];

  const startupMetrics = [
    { label: 'Total Funding', value: '₹50L', change: '+10%' },
    { label: 'Active Mentors', value: '3', change: '0' },
    { label: 'Team Size', value: '12', change: '+2' },
  ];

  const memberMetrics = [
    { label: 'Mentees Assigned', value: '4', change: '+1' },
    { label: 'Upcoming Sessions', value: '2', change: '0' },
    { label: 'Hours Mentored', value: '45', change: '+5' },
  ];

  if (!role) return null;

  return (
    <div className="dashboard-page animate-fade-in">
      <div className="dashboard-layout container">
        
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="sidebar-profile">
            <div className="profile-avatar">
              {userName.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <h4 className="m-0">{userName}</h4>
              <p className="text-muted text-sm capitalize">{role}</p>
            </div>
          </div>
          
          <nav className="sidebar-nav">
            {role === 'student' && (
              <>
                <button className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}><User size={20} /> My Profile</button>
                <button className={`nav-item ${activeTab === 'events' ? 'active' : ''}`} onClick={() => setActiveTab('events')}><CalendarDays size={20} /> My Events</button>
                <button className={`nav-item ${activeTab === 'certificates' ? 'active' : ''}`} onClick={() => setActiveTab('certificates')}><Award size={20} /> Certificates</button>
                <button className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}><Settings size={20} /> Settings</button>
              </>
            )}
            {role === 'startup' && (
              <>
                <button className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}><Building2 size={20} /> Startup Profile</button>
                <button className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}><BarChart3 size={20} /> Overview</button>
                <button className={`nav-item ${activeTab === 'funding' ? 'active' : ''}`} onClick={() => setActiveTab('funding')}><Briefcase size={20} /> Funding & MSME</button>
                <button className={`nav-item ${activeTab === 'network' ? 'active' : ''}`} onClick={() => setActiveTab('network')}><Users size={20} /> Mentor Network</button>
                <button className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}><Settings size={20} /> Settings</button>
              </>
            )}
            {role === 'member' && (
              <>
                <button className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}><User size={20} /> Member Profile</button>
                <button className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}><ClipboardList size={20} /> Dashboard</button>
                <button className={`nav-item ${activeTab === 'mentees' ? 'active' : ''}`} onClick={() => setActiveTab('mentees')}><Users size={20} /> My Mentees</button>
                <button className={`nav-item ${activeTab === 'messages' ? 'active' : ''}`} onClick={() => setActiveTab('messages')}><MessageSquare size={20} /> Messages</button>
                <button className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}><Settings size={20} /> Settings</button>
              </>
            )}
            {role === 'admin' && (
              <>
                <button className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}><Shield size={20} /> Admin Profile</button>
                <button className={`nav-item ${activeTab === 'system' ? 'active' : ''}`} onClick={() => setActiveTab('system')}><BarChart3 size={20} /> System Overview</button>
                <button className={`nav-item ${activeTab === 'users' ? 'active' : ''}`} onClick={() => setActiveTab('users')}><Users size={20} /> Manage Users</button>
                <button className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}><Settings size={20} /> Settings</button>
              </>
            )}
          </nav>

          <button className="btn btn-outline full-width mt-auto logout-btn" onClick={handleLogout}>
            <LogOut size={18} /> Logout
          </button>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          <header className="dashboard-header mb-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h2>Welcome back, {userName}!</h2>
                <p className="text-muted">Here is what's happening with your {role} account today.</p>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-outline btn-sm" style={{ padding: '0.5rem 1rem' }}>
                  <Bell size={16} /> Notifications
                </button>
                <div className="badge badge-green d-flex align-items-center gap-1">
                  <CheckCircle2 size={14} /> {role === 'admin' ? 'System Admin' : 'Account Verified'}
                </div>
              </div>
            </div>
          </header>

          {/* ================= ROLE PROFILES ================= */}
          {activeTab === 'profile' && (
            <div className="profile-view animate-fade-in">
              <div className="card mb-4">
                <h3 className="border-bottom pb-3 mb-4">
                  {role === 'student' ? 'Student Profile' : 
                   role === 'startup' ? 'Startup Profile' : 
                   role === 'member' ? 'Incubation Member Profile' : 'Admin Profile'}
                </h3>
                
                {role === 'student' && (
                  <div className="dashboard-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                    <div>
                      <p className="text-muted text-sm mb-1">University ID</p>
                      <h4 className="mb-4">AMET-2026-CS</h4>
                      <p className="text-muted text-sm mb-1">Degree Program</p>
                      <h4 className="mb-4">B.E. Computer Science</h4>
                    </div>
                    <div>
                      <p className="text-muted text-sm mb-1">Current Year</p>
                      <h4 className="mb-4">3rd Year</h4>
                      <p className="text-muted text-sm mb-1">Incubation Status</p>
                      <h4 className="text-primary mb-4">Eligible to Apply</h4>
                    </div>
                  </div>
                )}

                {role === 'startup' && (
                  <div className="dashboard-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                    <div>
                      <p className="text-muted text-sm mb-1">Company Name</p>
                      <h4 className="mb-4">DemoTech Solutions</h4>
                      <p className="text-muted text-sm mb-1">Industry</p>
                      <h4 className="mb-4">Maritime Tech</h4>
                    </div>
                    <div>
                      <p className="text-muted text-sm mb-1">Incubation Stage</p>
                      <h4 className="mb-4 text-green">Early Traction</h4>
                      <p className="text-muted text-sm mb-1">Collaboration Type</p>
                      <h4 className="mb-4">Seeking Funding & Mentorship</h4>
                    </div>
                  </div>
                )}

                {role === 'member' && (
                  <div className="dashboard-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                    <div>
                      <p className="text-muted text-sm mb-1">Domain of Expertise</p>
                      <h4 className="mb-4">Maritime Engineering</h4>
                      <p className="text-muted text-sm mb-1">Years of Experience</p>
                      <h4 className="mb-4">15 Years</h4>
                    </div>
                    <div>
                      <p className="text-muted text-sm mb-1">Membership Status</p>
                      <h4 className="mb-4 text-green">Active Mentor</h4>
                      <p className="text-muted text-sm mb-1">Agreement</p>
                      <h4 className="mb-4">Signed & Verified</h4>
                    </div>
                  </div>
                )}

                {role === 'admin' && (
                  <div className="dashboard-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                    <div>
                      <p className="text-muted text-sm mb-1">Access Level</p>
                      <h4 className="mb-4 text-primary">Super Administrator</h4>
                      <p className="text-muted text-sm mb-1">Department</p>
                      <h4 className="mb-4">AMET Incubation Center</h4>
                    </div>
                    <div>
                      <p className="text-muted text-sm mb-1">Last Login</p>
                      <h4 className="mb-4">Today, 09:41 AM</h4>
                      <p className="text-muted text-sm mb-1">System Status</p>
                      <h4 className="mb-4 text-green">All Systems Operational</h4>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ================= STUDENT VIEWS ================= */}
          {role === 'student' && activeTab === 'events' && (
            <div className="student-view animate-fade-in">
              <div className="card mb-4">
                <div className="card-header border-bottom pb-3 mb-3">
                  <h3>Event History</h3>
                </div>
                <div className="table-responsive">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Event Name</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentEvents.map(event => (
                        <tr key={event.id}>
                          <td>{event.title}</td>
                          <td className="text-muted">{event.date}</td>
                          <td>
                            <span className={`badge ${event.status === 'Registered' ? 'badge-blue' : 'badge-green'}`}>
                              {event.status}
                            </span>
                          </td>
                          <td><button className="btn btn-sm btn-outline">View</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="card bg-gradient-primary border-0">
                <h3>Looking for an internship?</h3>
                <p className="mb-3 mt-2">Connect with our incubated startups and apply for roles directly.</p>
                <Link to="/portfolio" className="btn btn-outline" style={{ background: 'white', color: 'black' }}>Explore Ventures</Link>
              </div>
            </div>
          )}

          {role === 'student' && activeTab === 'certificates' && (
            <div className="student-view animate-fade-in">
              <h3 className="mb-4">My Certificates</h3>
              <div className="dashboard-grid">
                {certificates.map(cert => (
                  <div key={cert.id} className="card text-center py-5">
                    <Award size={48} className="text-primary mx-auto mb-3" />
                    <h4>{cert.title}</h4>
                    <p className="text-muted text-sm mb-4">Issued: {cert.date}</p>
                    <button className="btn btn-outline btn-sm mx-auto d-flex align-items-center gap-2">
                      <Download size={16} /> Download PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= STARTUP VIEWS ================= */}
          {role === 'startup' && activeTab === 'overview' && (
            <div className="startup-view animate-fade-in">
              <div className="metrics-grid mb-5">
                {startupMetrics.map((metric, idx) => (
                  <div key={idx} className="card metric-card">
                    <p className="text-muted text-sm text-uppercase">{metric.label}</p>
                    <div className="metric-value">
                      <h3>{metric.value}</h3>
                      <span className={`metric-change ${metric.change.startsWith('+') ? 'text-green' : 'text-muted'}`}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="dashboard-grid">
                <div className="card">
                  <h3 className="mb-3">MSME Application Status</h3>
                  <div className="progress-tracker">
                    <div className="progress-step completed">1. Documentation</div>
                    <div className="progress-step active">2. Screening Phase</div>
                    <div className="progress-step">3. Approval</div>
                    <div className="progress-step">4. Disbursal</div>
                  </div>
                </div>
                
                <div className="card">
                  <h3 className="mb-3">Recent Mentor Feedback</h3>
                  <div className="feedback-item">
                    <div className="text-sm font-semibold">Dr. Rajesh Kumar (TechCorp)</div>
                    <p className="text-muted text-sm mt-1">"The revised business model looks solid. Let's discuss go-to-market strategy next week."</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {role === 'startup' && activeTab === 'funding' && (
            <div className="startup-view animate-fade-in">
              <div className="card mb-4">
                <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
                  <h3 className="m-0">Funding History</h3>
                  <button className="btn btn-primary btn-sm">Log New Funding</button>
                </div>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Round</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>Investor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Seed Round</td>
                      <td>₹50,000,00</td>
                      <td className="text-muted">Jan 2026</td>
                      <td>Venture Catalyst</td>
                    </tr>
                    <tr>
                      <td>Pre-Seed (Grant)</td>
                      <td>₹5,000,00</td>
                      <td className="text-muted">Sep 2025</td>
                      <td>AMET Incubation</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="card">
                <h3 className="mb-3">MSME Grant Application</h3>
                <p className="text-muted mb-4">Upload the required documents to move to the Approval phase.</p>
                <div className="form-group mb-3">
                  <label style={{ display: 'block', marginBottom: '0.5rem' }}>Business Registration Certificate</label>
                  <input type="file" className="form-control full-width" style={{ padding: '0.5rem', background: 'var(--color-bg)' }} />
                </div>
                <button className="btn btn-outline">Submit Documents</button>
              </div>
            </div>
          )}

          {role === 'startup' && activeTab === 'network' && (
            <div className="startup-view animate-fade-in">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="m-0">My Connected Mentors</h3>
                <Link to="/startup-network" className="btn btn-outline btn-sm">Find More Mentors</Link>
              </div>
              <div className="dashboard-grid">
                <div className="card text-center py-4">
                  <div className="profile-avatar mx-auto mb-3" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}>RK</div>
                  <h4>Dr. Rajesh Kumar</h4>
                  <p className="text-muted text-sm mb-3">Lead Mentor - AI/ML</p>
                  <button className="btn btn-primary btn-sm full-width">Message</button>
                </div>
                <div className="card text-center py-4">
                  <div className="profile-avatar mx-auto mb-3" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}>PS</div>
                  <h4>Priya Sharma</h4>
                  <p className="text-muted text-sm mb-3">Angel Investor</p>
                  <button className="btn btn-primary btn-sm full-width">Message</button>
                </div>
              </div>
            </div>
          )}

          {/* ================= MEMBER VIEWS ================= */}
          {role === 'member' && activeTab === 'dashboard' && (
            <div className="member-view animate-fade-in">
              <div className="metrics-grid mb-5">
                {memberMetrics.map((metric, idx) => (
                  <div key={idx} className="card metric-card">
                    <p className="text-muted text-sm text-uppercase">{metric.label}</p>
                    <div className="metric-value">
                      <h3>{metric.value}</h3>
                      <span className={`metric-change ${metric.change.startsWith('+') ? 'text-green' : 'text-muted'}`}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="dashboard-grid">
                <div className="card">
                  <h3 className="mb-3">Recent Mentee Requests</h3>
                  <div className="feedback-item mb-3">
                    <div className="text-sm font-semibold">HealthAI (HealthTech)</div>
                    <p className="text-muted text-sm mt-1">"We need help optimizing our AI pipeline for edge devices. Available for a quick call?"</p>
                    <button className="btn btn-sm btn-outline mt-3">Accept Request</button>
                  </div>
                </div>
                
                <div className="card">
                  <h3 className="mb-3">Upcoming Meetings</h3>
                  <div className="feedback-item">
                    <div className="text-sm font-semibold">EcoTech Solutions</div>
                    <p className="text-muted text-sm mt-1">Pitch Deck Review</p>
                    <p className="text-muted text-sm mt-1"><CalendarDays size={14}/> Aug 12, 10:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {role === 'member' && activeTab === 'mentees' && (
            <div className="member-view animate-fade-in">
              <div className="card">
                <h3 className="mb-3">Startups I Mentor</h3>
                <div className="table-responsive">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Startup Name</th>
                        <th>Industry</th>
                        <th>Last Session</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>EcoTech Solutions</td>
                        <td>CleanTech</td>
                        <td className="text-muted">Aug 1, 2026</td>
                        <td><button className="btn btn-sm btn-outline">View Notes</button></td>
                      </tr>
                      <tr>
                        <td>FinTrack</td>
                        <td>FinTech</td>
                        <td className="text-muted">Jul 20, 2026</td>
                        <td><button className="btn btn-sm btn-outline">View Notes</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {role === 'member' && activeTab === 'messages' && (
            <div className="member-view animate-fade-in">
              <div className="card" style={{ minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
                <h3 className="mb-4 border-bottom pb-3">Inbox</h3>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="text-center text-muted">
                    <MessageSquare size={48} className="mx-auto mb-3 opacity-50" />
                    <p>Select a conversation to start messaging</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= ADMIN VIEWS ================= */}
          {role === 'admin' && activeTab === 'system' && (
            <div className="admin-view animate-fade-in">
              <div className="metrics-grid mb-5">
                <div className="card metric-card">
                  <p className="text-muted text-sm text-uppercase">Total Users</p>
                  <div className="metric-value">
                    <h3>1,245</h3>
                    <span className="metric-change text-green">+45</span>
                  </div>
                </div>
                <div className="card metric-card">
                  <p className="text-muted text-sm text-uppercase">Active Startups</p>
                  <div className="metric-value">
                    <h3>42</h3>
                    <span className="metric-change text-green">+3</span>
                  </div>
                </div>
                <div className="card metric-card">
                  <p className="text-muted text-sm text-uppercase">Funds Disbursed</p>
                  <div className="metric-value">
                    <h3>₹4.5Cr</h3>
                    <span className="metric-change text-green">12%</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <h3 className="mb-3">System Alerts</h3>
                <p className="text-muted">No active alerts. All systems are running smoothly.</p>
              </div>
            </div>
          )}

          {role === 'admin' && activeTab === 'users' && (
            <div className="admin-view animate-fade-in">
              <div className="card">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="m-0">User Management</h3>
                  <button className="btn btn-primary btn-sm">Add New User</button>
                </div>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alex Johnson</td>
                      <td>Student</td>
                      <td><span className="badge badge-green">Active</span></td>
                      <td><button className="btn btn-sm btn-outline">Edit</button></td>
                    </tr>
                    <tr>
                      <td>Priya Sharma</td>
                      <td>Member</td>
                      <td><span className="badge badge-green">Active</span></td>
                      <td><button className="btn btn-sm btn-outline">Edit</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ================= COMMON SETTINGS VIEW ================= */}
          {activeTab === 'settings' && (
            <div className="settings-view animate-fade-in">
              <div className="dashboard-grid">
                
                {/* Profile Settings */}
                <div className="card">
                  <div className="d-flex align-items-center gap-2 mb-4 border-bottom pb-3">
                    <User size={24} className="text-primary" />
                    <h3 className="m-0">Account Details</h3>
                  </div>
                  
                  <div className="d-flex align-items-center gap-4 mb-4">
                    <div className="profile-avatar" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                      {userName.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <button className="btn btn-outline btn-sm mb-2 d-flex align-items-center gap-2">
                        <Camera size={16} /> Change Avatar
                      </button>
                      <p className="text-muted text-sm m-0">JPG, GIF or PNG. Max size of 800K</p>
                    </div>
                  </div>

                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="dashboard-grid mb-3" style={{ gridTemplateColumns: '1fr 1fr' }}>
                      <div className="form-group">
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>First Name</label>
                        <input type="text" className="form-control full-width" defaultValue={userName} style={{ padding: '0.75rem', borderRadius: '0.5rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)' }} />
                      </div>
                      <div className="form-group">
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Last Name</label>
                        <input type="text" className="form-control full-width" defaultValue="Doe" style={{ padding: '0.75rem', borderRadius: '0.5rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)' }} />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email Address</label>
                      <input type="email" className="form-control full-width" defaultValue="user@example.com" style={{ padding: '0.75rem', borderRadius: '0.5rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)' }} />
                    </div>
                    <div className="form-group mb-4">
                      <label style={{ display: 'block', marginBottom: '0.5rem' }}>Bio / Description</label>
                      <textarea className="form-control full-width" rows={3} placeholder="Tell us about yourself..." style={{ padding: '0.75rem', borderRadius: '0.5rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', resize: 'none' }}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Save Profile</button>
                  </form>
                </div>

                {/* Right Column: Notifications & Security */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  
                  {/* Notifications */}
                  <div className="card">
                    <div className="d-flex align-items-center gap-2 mb-4 border-bottom pb-3">
                      <Bell size={24} className="text-primary" />
                      <h3 className="m-0">Preferences</h3>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <h5 className="m-0">Email Notifications</h5>
                        <p className="text-muted text-sm m-0">Receive updates about your account.</p>
                      </div>
                      <div style={{ width: '40px', height: '24px', background: 'var(--color-primary)', borderRadius: '12px', position: 'relative', cursor: 'pointer' }}>
                        <div style={{ width: '18px', height: '18px', background: 'white', borderRadius: '50%', position: 'absolute', top: '3px', right: '3px' }}></div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="m-0">Profile Visibility</h5>
                        <p className="text-muted text-sm m-0">Allow others to find your profile.</p>
                      </div>
                      <div style={{ width: '40px', height: '24px', background: 'var(--color-primary)', borderRadius: '12px', position: 'relative', cursor: 'pointer' }}>
                        <div style={{ width: '18px', height: '18px', background: 'white', borderRadius: '50%', position: 'absolute', top: '3px', right: '3px' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Security */}
                  <div className="card">
                    <div className="d-flex align-items-center gap-2 mb-4 border-bottom pb-3">
                      <Shield size={24} className="text-primary" />
                      <h3 className="m-0">Security</h3>
                    </div>
                    
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="form-group mb-3">
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>Current Password</label>
                        <input type="password" className="form-control full-width" placeholder="••••••••" style={{ padding: '0.75rem', borderRadius: '0.5rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)' }} />
                      </div>
                      <div className="form-group mb-4">
                        <label style={{ display: 'block', marginBottom: '0.5rem' }}>New Password</label>
                        <input type="password" className="form-control full-width" placeholder="••••••••" style={{ padding: '0.75rem', borderRadius: '0.5rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)' }} />
                      </div>
                      <button type="submit" className="btn btn-outline full-width">Update Password</button>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}