import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SearchPage from './SearchPage';


function App() {
  return (
    <div className="app">

<BrowserRouter>
   <Header /> 
   
  <Routes > 
    <Route path='/search' element={<SearchPage />}/>
    <Route path='/' element={<Home />}/>
   </Routes> 

   <Footer />
   </BrowserRouter>

    </div>
  );
}

export default App;
