import './custom.styles.css';
import { React } from 'react';
import Navbar from './components/navbar/Navbar';
// import Home from './pages/Home';
// import ProductListing from './pages/ProductListing';
// import Signup from './pages/Signup';
// import ProductData from './pages/ProductData';
// import Login from './pages/Login';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="flex-row">
      <Navbar />
      {/* <Home />
      <ProductListing />
      <Signup />
      <ProductData />
      <Login /> */}
      <Checkout />
    </div>
  );
}

export default App;
