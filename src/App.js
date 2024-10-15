// import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

import data from "./data.js";
console.log(data)

function App() {

  const cards = data.map(item => {
    return (
      <Card key={item.id}{...item} />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <section className='cards-list'>
        {cards}

      </section>
   
    </div>
  );
}

export default App;
