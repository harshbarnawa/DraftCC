import React, { useState } from 'react';

export default function WelcomePage() {
  const [posts] = useState([
    {
      id: 1,
      title: 'Getting Started with React',
      author: 'John Doe',
      date: 'Oct 1, 2025',
      excerpt: 'Learn the basics of React and start building modern web applications with this comprehensive guide.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Understanding JavaScript ES6',
      author: 'Jane Smith',
      date: 'Sep 28, 2025',
      excerpt: 'Explore the powerful features of ES6 that make JavaScript development more efficient and enjoyable.',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'CSS Grid vs Flexbox',
      author: 'Mike Johnson',
      date: 'Sep 25, 2025',
      excerpt: 'A detailed comparison of CSS Grid and Flexbox to help you choose the right layout method.',
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Web Performance Optimization',
      author: 'Sarah Williams',
      date: 'Sep 22, 2025',
      excerpt: 'Discover techniques to improve your website speed and deliver better user experiences.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Modern Web Design Trends',
      author: 'David Brown',
      date: 'Sep 20, 2025',
      excerpt: 'Stay up to date with the latest design trends shaping the web development landscape.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Introduction to Node.js',
      author: 'Emily Davis',
      date: 'Sep 18, 2025',
      excerpt: 'Learn how to build scalable server-side applications using Node.js and Express.',
      image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&h=400&fit=crop'
    }
  ]);

  return (
    <div className="welcome-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <span className="logo-text">MyWebsite</span>
          </div>
          <div className="navbar-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#blog" className="nav-link">Blog</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className="navbar-auth">
            <button className="auth-button login-button">Login</button>
            <button className="auth-button register-button">Register</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to MyWebsite</h1>
          <p className="hero-subtitle">
            Discover amazing content, connect with others, and share your stories
          </p>
          <button className="hero-cta">Get Started</button>
        </div>
      </section>

      {/* Posts Feed */}
      <section className="posts-section">
        <div className="posts-container">
          <h2 className="section-title">Latest Posts</h2>
          <div className="posts-grid">
            {posts.map((post) => (
              <article key={post.id} className="post-card">
                <div className="post-image-wrapper">
                  <img src={post.image} alt={post.title} className="post-image" />
                </div>
                <div className="post-content">
                  <h3 className="post-title">{post.title}</h3>
                  <div className="post-meta">
                    <span className="post-author">{post.author}</span>
                    <span className="post-date">{post.date}</span>
                  </div>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <button className="read-more-button">Read More</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4 className="footer-heading">About</h4>
            <ul className="footer-links">
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#team" className="footer-link">Our Team</a></li>
              <li><a href="#careers" className="footer-link">Careers</a></li>
              <li><a href="#press" className="footer-link">Press</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li><a href="#help" className="footer-link">Help Center</a></li>
              <li><a href="#contact" className="footer-link">Contact Us</a></li>
              <li><a href="#faq" className="footer-link">FAQ</a></li>
              <li><a href="#feedback" className="footer-link">Feedback</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="#terms" className="footer-link">Terms of Service</a></li>
              <li><a href="#cookies" className="footer-link">Cookie Policy</a></li>
              <li><a href="#guidelines" className="footer-link">Guidelines</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-links">
              <li><a href="#twitter" className="footer-link">Twitter</a></li>
              <li><a href="#facebook" className="footer-link">Facebook</a></li>
              <li><a href="#instagram" className="footer-link">Instagram</a></li>
              <li><a href="#linkedin" className="footer-link">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 MyWebsite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}