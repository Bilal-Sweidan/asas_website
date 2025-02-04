import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

// import global css file
import './global.css'



createRoot(document.getElementById('root')).render(
  <App/>
)
