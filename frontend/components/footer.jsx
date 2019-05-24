import React from 'react';

const Footer = () => {
  return (
    <div className="footer-wrap">
      <div className="footer">
        <div className="footer-spread">
          <a href='https://www.github.com/gradyzhu'>
            <i className="fab fa-github footer-text"></i>
          </a>
          <a href={`https://www.linkedin.com/in/gradyzhu`}>
            <i className="fab fa-linkedin footer-text"></i>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Footer;