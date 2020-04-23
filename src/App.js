import React from 'react';
import Header from './components/Header';
import Infobox from './components/Infobox';
import Card from './components/Card';
import Riddlebox from "./components/Riddlebox";
import Footer from './components/Footer';
import './index.css';
import 'tachyons';

function App() {
  return (
    <div className="App">
     
        <div>
          <Header />
        </div>

        <div>
          <div className="fl w-third pa2 pt6">
            <Infobox />
          </div>

          <div className="fl w-third pa2 tc">
            <Card />
          </div>

          <div  className="fl w-third pa2 pt6">
            <Riddlebox />
          </div>
        </div>

        <div>
          <Footer />
        </div>
     
    </div>
  );
}

export default App;
