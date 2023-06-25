import './custom.styles.css';
import { React } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import Signup from './pages/Signup';
import Filters from './components/filters/Filters';

function App() {
  return (
    <div className="flex-row">
      <Navbar />
      <Home />
      <ProductListing />
      <Signup />
      <Filters />
    </div>
  );
}

export default App;
