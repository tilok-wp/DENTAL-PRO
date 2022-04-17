import logo from './logo.svg';
import './App.css';
import Header from './conponents/Header/Header';
import Footer from './conponents/Footer/Footer';
import Home from './conponents/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
