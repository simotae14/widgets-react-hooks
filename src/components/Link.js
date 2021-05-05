import React from 'react';

const Link = ({ href, className, children }) => {
  const onClick = (event) => {
    event.preventDefault();
    // change the url in the browser bar
    window.history.pushState({}, '', href);
  }
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
