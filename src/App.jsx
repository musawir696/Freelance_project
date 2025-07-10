import { useState } from 'react';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Navbar from './components/Navbar.jsx';
import ProductList from './components/ProductList.jsx'; 
import TrainingSetion from './components/TrainingSection.jsx';
import Testimonials from './components/Testimonials.jsx';
import StatsDashboard from './components/StatsDashboard.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ProductList />
      <TrainingSetion />
      <Testimonials />
      <StatsDashboard />
      

    </>
  );
}

export default App;
