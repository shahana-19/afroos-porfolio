import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--bg-tertiary)',
      padding: '2rem 0',
      textAlign: 'center',
      borderTop: '1px solid var(--glass-border)'
    }}>
      <div className="container">
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Afroos Shahana. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
