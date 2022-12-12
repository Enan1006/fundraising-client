import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Donate from './Pages/Donate/Donate';
import Header from './Pages/Shared/Header/Header';
import Scolar from './Pages/Scolar/Scolar';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AddCampaign from './Pages/Dashboard/AddCampaign/AddCampaign';
import HelpDetails from './Pages/Home/Help/HelpDetails';
import Dashboard from './Pages/Dashboard/Dashboard';
import { Stack } from 'react-bootstrap';
import Footer from './Pages/Shared/Footer/Footer';
import { useState } from 'react';
import Routesin from './Pages/Routes/Routesin';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageCampaign from './Pages/Dashboard/ManageCampaign/ManageCampaign';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateCampaign from './Pages/Dashboard/ManageCampaign/UpdateCampaign';
import Payment from './Pages/Payment/Payment';


function App() {
  return (

    <div>
      <Routes>
        <Route path='/payment/:PaymentId' element={<Payment />}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}  >
          <Route path="/dashboard/addcampaign" element={<AddCampaign></AddCampaign>} />
          <Route path="/dashboard/addnewproduct" element={<AddProduct></AddProduct>} />
          <Route path="/dashboard/managecampaign" element={<ManageCampaign></ManageCampaign>} />
          <Route path="/dashboard/update-campaign/:campaignId" element={<UpdateCampaign />} />
        </Route>

        <Route path="*" element={<Routesin></Routesin>} />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>

  );
}
export default App;
