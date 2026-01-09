import React from 'react';
import { motion } from 'framer-motion';
import carHero from '../assets/hero-car.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hero-subtitle"
                >
                    TRAVEL SECURELY WITH US!
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hero-title"
                >
                    Book Your Taxi From Anywhere Today
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="hero-desc"
                >
                    Everything Your Taxi Business Need Is Already Here!<br />
                    Nk Cars Made For Taxi Service Companies!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="hero-actions"
                >
                    <button className="btn-primary">Book Your Ride</button>
                    <button className="btn-outline">Contact us</button>
                </motion.div>
            </div>

            <style jsx>{`
        .hero {
          position: relative;
          height: 100vh;
          min-height: 800px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0a0a0a url(${carHero}) no-repeat center bottom;
          background-size: 100% auto;
          text-align: center;
          padding-top: 80px;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0) 50%,
            rgba(0, 0, 0, 0.4) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 800px;
        }

        .hero-subtitle {
          color: var(--primary);
          font-weight: 600;
          letter-spacing: 2px;
          margin-bottom: 20px;
          font-size: 0.9rem;
        }


        .hero-title {
          font-size: 5.5rem;
          font-weight: 800;
          margin-bottom: 25px;
          line-height: 1;
          letter-spacing: -2px;
          text-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .hero-desc {
          font-size: 1.1rem;
          color: white;
          margin-bottom: 40px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 20px;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }
          .hero-actions button {
            width: 200px;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
