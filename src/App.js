import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import './index.css';
import 'tachyons';

function App() {
  return (
    <div className="App">
     
        <div>
          <Header />
        </div>

        <div className="tc">
          <Card />
        </div>

        <div>
          <Footer />
        </div>
     
    </div>
  );
}

export default App;
