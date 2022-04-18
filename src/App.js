import logo from './logo.svg';
import './App.css';
import Header from './conponents/Header/Header';
import Footer from './conponents/Footer/Footer';
import Home from './conponents/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Notfound from './conponents/Notfound/Notfound';
import About from './conponents/About/About';
import Services from './conponents/Services/Services';
import Checkout from './conponents/Checkout/Checkout';
import Blogs from './conponents/Blogs/Blogs';
import Contact from './conponents/Contact/Contact';
import Login from './conponents/Login/Login';
import Register from './conponents/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={<Checkout>'</Checkout>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
