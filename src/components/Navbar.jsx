import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <div className="logo-container">
                    <img src={logo} alt="NK Drop Taxi" className="logo" />
                </div>

                <ul className="nav-links">
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>

                <button className="btn-primary quote-btn">Book a Taxi</button>
            </div>

            <style jsx>{`
        .navbar {
          height: 90px;
          display: flex;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: transparent;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(10, 10, 10, 0.95);
          height: 70px;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo {
          height: 80px;
          object-fit: contain;
          transition: all 0.3s ease;
        }

        .navbar.scrolled .logo {
          height: 50px;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 30px;
        }

        .nav-links a {
          text-decoration: none;
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
          transition: var(--transition);
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }

        .nav-links a:hover, .nav-links a.active {
          color: var(--primary);
        }

        .quote-btn {
          font-size: 0.9rem;
          padding: 10px 20px;
        }

        @media (max-width: 968px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
