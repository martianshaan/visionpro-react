import './custom.styles.css';
import { React } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';

function App() {
  return (
    <div className="flex-row">
      <Navbar />
      <Home/>
      <ProductListing/>
    </div>
  );
}

export default App;
