import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/reviews' element={<Reviews/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
