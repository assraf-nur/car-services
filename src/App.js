import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import Check from './Pages/CheckOut/Check';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageServices from './Pages/ManageServices/ManageServices';
import CheckOut from './Pages/Home/CheckOut/CheckOut';
import Orders from './Pages/Orders/Orders';

function App() {
  return (
    <div>
      <Header></Header>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/home' element={<Home></Home>}></Route>
         <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
         <Route path='/about' element={<About></About>}/>
         <Route path='/login' element={<Login></Login>}/>
         <Route path='/register' element={<Register></Register>}/>

         <Route path='/check' element={
           <RequireAuth>
             <Check></Check>
           </RequireAuth>
         }/>
         <Route path='/checkOut/:serviceId' element={
           <RequireAuth>
             <CheckOut></CheckOut>
           </RequireAuth>
         }/>

         <Route path='/manage' element={
           <RequireAuth>
             <ManageServices></ManageServices>
           </RequireAuth>
         }/>

         <Route path='/orders' element={
           <RequireAuth>
             <Orders></Orders>
           </RequireAuth>
         }/>
         
         <Route path='*' element={<NotFound></NotFound>}/>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
