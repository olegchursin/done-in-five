import React from 'react';

import GitHubCorner from './GitHubCorner';

const octoCat = {
  color: 'var(--theme-color)',
  background: 'var(--theme-dark)',
  url: 'https://github.com/olegchursin/done-in-five'
};

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <GitHubCorner
        url={octoCat.url}
        octocatColor={octoCat.color}
        backgroundColor={octoCat.background}
      />
    </header>
  );
};

export default Header;
