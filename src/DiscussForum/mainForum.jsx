import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './forum';

// document.getElementsByClassName('nav-item4').addEventListener('click', () => {
//     ReactDOM.render(<App />, document.getElementById('root'));
//   });


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)