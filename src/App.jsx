import './custom.styles.css';
import { React } from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import TrendingList from './components/trending/TrendingList';

function App() {
  return (
    <div className="flex-row">
      <Navbar />
      <Banner />
      <TrendingList />
    </div>
  );
}

export default App;
