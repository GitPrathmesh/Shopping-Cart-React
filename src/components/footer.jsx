import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>Made with ❤️ by Prathmesh</p>
      <div style={styles.icons}>
        <a href="https://www.instagram.com/prathmesh_kittur" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/prathmesh-k" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={styles.icon} />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'rgb(25, 25, 25)',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    width: '100%',
    bottom: 0,
    marginTop: '30px'
  },
  text: {
    marginBottom: '10px',
    fontSize: '18px',
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  icon: {
    color: '#fff',
    fontSize: '24px',
  },
};

export default Footer;
