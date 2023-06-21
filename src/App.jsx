import './custom.styles.css';
import { React } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="flex-row">
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
