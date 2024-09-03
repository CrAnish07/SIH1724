import React from 'react';
import ReactDOM from 'react-dom';

import App from './forum';

document.getElementsByClassName('nav-item4').addEventListener('click', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  });