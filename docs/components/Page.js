import React from 'react';
import PropTypes from 'prop-types';
import { window } from 'global';
import { rehydrate, css } from 'glamor';

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  // eslint-disable-next-line no-underscore-dangle
  rehydrate(window.__NEXT_DATA__.ids);
}

const Page = ({ children }) => {
  css.global('html, body', {
    padding: 0,
    margin: 0,
    minHeight: '100%',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
    fontSize: '16px',
    background:
      'radial-gradient(ellipse at top left, rgba(255,255,255,1) 11%,rgba(232,232,232,1) 100%)',
    height: '100%',
  });
  return <div>{children}</div>;
};
Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Page as default };
