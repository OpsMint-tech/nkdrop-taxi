import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BookingForm = () => {
    const [activeTab, setActiveTab] = useState('Round Trip');

    return (
        <section className="booking-section">
            <div className="container">
                <div className="booking-wrapper">
                    {/* Tabs */}
                    <div className="booking-tabs">
                        <button
                            className={`tab-btn ${activeTab === 'One Way' ? 'active' : ''}`}
                            onClick={() => setActiveTab('One Way')}
                        >
                            One Way
                            {activeTab === 'One Way' && <div className="tab-arrow"></div>}
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'Round Trip' ? 'active' : ''}`}
                            onClick={() => setActiveTab('Round Trip')}
                        >
                            Round Trip
                            {activeTab === 'Round Trip' && <div className="tab-arrow"></div>}
                        </button>
                    </div>

                    {/* Form */}
                    <div className="booking-form-container">
                        <form className="booking-form">
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" placeholder="Enter Name" />
                                </div>
                                <div className="form-group">
                                    <label>Mobile Number</label>
                                    <input type="text" placeholder="Mobile Number" />
                                </div>

                                <div className="form-group">
                                    <label>Vehicle Type</label>
                                    <select>
                                        <option value="">Select Vehicle Type</option>
                                        <option value="sedan">Sedan</option>
                                        <option value="suv">SUV</option>
                                        <option value="luxury">Luxury</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Vehicle Price</label>
                                    <input type="text" placeholder="18 Rs/KM" disabled />
                                </div>

                                <div className="form-group">
                                    <label>Pickup Location</label>
                                    <input type="text" placeholder="Enter Pickup Location" />
                                </div>
                                <div className="form-group">
                                    <label>Drop Location</label>
                                    <input type="text" placeholder="Enter Drop Location" />
                                </div>

                                <div className="form-group">
                                    <label>Pickup Date/Time</label>
                                    <input type="datetime-local" placeholder="Enter Pickup Date/Time" />
                                </div>
                                <div className="form-group">
                                    <label>Return Date/Time</label>
                                    <input
                                        type="datetime-local"
                                        placeholder="Enter Return Date/Time"
                                        disabled={activeTab === 'One Way'}
                                    />
                                </div>
                            </div>

                            <div className="form-submit">
                                <button type="submit" className="btn-primary full-width">Book A Taxi</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .booking-section {
          background: #000;
          padding: 80px 0;
          margin-top: -100px;
          position: relative;
          z-index: 20;
        }

        .booking-wrapper {
          display: flex;
          background: var(--surface);
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .booking-tabs {
          width: 250px;
          display: flex;
          flex-direction: column;
          background: #000;
        }

        .tab-btn {
          height: 80px;
          background: transparent;
          border: none;
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
          padding: 0 40px;
          text-align: left;
          position: relative;
          transition: var(--transition);
        }

        .tab-btn.active {
          background: var(--primary);
          color: white;
        }

        .tab-arrow {
          position: absolute;
          right: -20px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 40px solid transparent;
          border-bottom: 40px solid transparent;
          border-left: 20px solid var(--primary);
          z-index: 10;
        }

        .booking-form-container {
          flex: 1;
          padding: 40px;
          background: #000;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .form-group label {
          color: white;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .form-group input, .form-group select {
          background: white;
          border: 1px solid var(--border);
          padding: 15px;
          border-radius: 4px;
          color: #333;
          font-size: 0.9rem;
          outline: none;
          transition: var(--transition);
        }

        .form-group input:focus, .form-group select:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 2px rgba(193, 146, 77, 0.2);
        }

        .form-group input:disabled {
          background: #f5f5f5;
          cursor: not-allowed;
        }

        .form-submit {
          margin-top: 40px;
          display: flex;
          justify-content: center;
        }

        .full-width {
          width: 200px;
          border-radius: 4px;
        }

        @media (max-width: 968px) {
          .booking-wrapper {
            flex-direction: column;
          }
          .booking-tabs {
            width: 100%;
            flex-direction: row;
          }
          .tab-btn {
            flex: 1;
            height: 60px;
            padding: 0;
            text-align: center;
          }
          .tab-arrow {
            display: none;
          }
          .form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default BookingForm;
