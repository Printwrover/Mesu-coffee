// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../src/assets/css/App.css'; // Import CSS tùy chỉnh

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);