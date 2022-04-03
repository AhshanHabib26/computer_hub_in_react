import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
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
    </Routes>


     <h1>Hello World</h1>
    </div>
  );
}

export default App;
