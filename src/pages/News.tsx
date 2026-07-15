import { ArrowRight } from 'lucide-react';
import './News.css';

const NEWS_ITEMS = [
  {
    id: 1,
    category: 'Funding',
    title: 'HealthAI Raises $2M Seed Round to Expand Diagnostics Platform',
    date: 'July 5, 2026',
    excerpt: 'AMET Incubation alumni HealthAI has successfully closed a $2M seed round led by prominent healthcare VCs to accelerate product development.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173ff94031d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'Milestone',
    title: 'Incubation Centre Crosses 45 Startup Mark',
    date: 'June 28, 2026',
    excerpt: 'We are thrilled to announce that we have officially onboarded our 45th startup into the ecosystem, marking a significant milestone for our community.',
  },
  {
    id: 3,
    category: 'Award',
    title: 'EcoTech Solutions Wins National Innovation Award',
    date: 'June 15, 2026',
    excerpt: 'EcoTech Solutions was recognized at the National Green Innovation Summit for their groundbreaking work in smart city energy management.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'Partnership',
    title: 'AMET Partners with MSME Ministry for Direct Funding Access',
    date: 'June 2, 2026',
    excerpt: 'A new MoU signed today will allow startups at AMET to fast-track their MSME grant applications and access federal funding seamlessly.',
  },
  {
    id: 5,
    category: 'Student Success',
    title: 'Student Hackathon Team Selected for Global Finals in Tokyo',
    date: 'May 20, 2026',
    excerpt: 'Team "Maritime Innovators" from the recent AMET Hackathon has been invited to present their solution at the Global Maritime Tech Finals.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop'
  }
];

export default function News() {
  return (
    <div className="news-page animate-fade-in">
      <header className="page-header text-center">
        <div className="container">
          <h1 className="text-gradient">News & Insights</h1>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Stay updated with the latest milestones, funding announcements, and success stories from our vibrant community.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="masonry-grid">
            {NEWS_ITEMS.map(news => (
              <article key={news.id} className="news-card card">
                {news.image && (
                  <div className="news-image-wrapper">
                    <img src={news.image} alt={news.title} loading="lazy" />
                  </div>
                )}
                <div className="news-content">
                  <div className="news-meta">
                    <span className="badge badge-blue">{news.category}</span>
                    <span className="news-date text-muted">{news.date}</span>
                  </div>
                  <h3 className="news-title">{news.title}</h3>
                  <p className="news-excerpt text-muted">{news.excerpt}</p>
                  <button className="btn-read-more">
                    Read Full Story <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
