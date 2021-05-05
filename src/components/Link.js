import React from 'react';

const Link = ({ href, className, children }) => {
  const onClick = (event) => {
    // return if you click to open in a new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    // change the url in the browser bar
    window.history.pushState({}, '', href);

    // create a custom popstate event
    const navEvent = new PopStateEvent('popstate');
    // dispatch del nuovo event
    window.dispatchEvent(navEvent);
  }
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
