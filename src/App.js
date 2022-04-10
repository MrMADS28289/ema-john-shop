import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Orders from './Components/OrderSummery/Orders';
import RequerAuth from './Components/RequerAuth/RequerAuth';
import Shipment from './Components/Shipment/Shipment';
import Shop from './Components/Shop/Shop';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={
          <RequerAuth>
            <Inventory></Inventory>
          </RequerAuth>
        }></Route>
        <Route path='/shipment' element={
          <RequerAuth>
            <Shipment></Shipment>
          </RequerAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

// npm run build