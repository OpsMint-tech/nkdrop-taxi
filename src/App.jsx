import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <BookingForm />

      {/* Footer Placeholder for completeness */}
      <footer style={{ padding: '40px 0', borderTop: '1px solid var(--border)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
        <p>&copy; 2026 NK DROP TAXI. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
