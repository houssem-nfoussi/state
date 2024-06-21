import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import About from './component/About';
import Contact from './component/Contact';
import Product from './component/Product';
import Navbar from './component/Navbar';


function App() {
  const [page, setpage] = useState(0)

  return (
    <div className="App">
      <Navbar setpage={setpage}/>
      {page==0?<About/>:page==1?<Contact/>:page==2?<Product/>:null}
    </div>
  );
}

export default App;
