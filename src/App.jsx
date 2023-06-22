import './custom.styles.css';
import { React } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="flex-row">
      <Navbar />
      <Home/>
      <Signup />
    </div>
  );
}

export default App;
