import React from 'react';

const Footer: React.FunctionComponent = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <span>&copy;{year} Oleg Chursin</span>
      <span>&bull;</span>
      <span>
        <a
          href="https://olegchursin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          olegchursin.com
        </a>
      </span>
    </footer>
  );
};

export default Footer;
