import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/home' element={<Home></Home>}></Route>
         <Route path='/Service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
         <Route path='/about' element={<About></About>}/>
         <Route path='*' element={<NotFound></NotFound>}/>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
