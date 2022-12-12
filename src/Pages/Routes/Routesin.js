import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddCampaign from '../Dashboard/AddCampaign/AddCampaign';
import Dashboard from '../Dashboard/Dashboard';
import Donate from '../Donate/Donate';
import HelpDetails from '../Home/Help/HelpDetails';
import Home from '../Home/Home';
import Login from '../Login/Login/Login';
import Register from '../Login/Register/Register';
import Scolar from '../Scolar/Scolar';
import Header from '../Shared/Header/Header';

const Routesin = () => {
    return (
        <div className="App">
            <React.Fragment />
            <nav>
                <Header></Header>
            </nav>
            <Routes>


                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path='/donate' element={<Donate></Donate>}></Route>
                <Route path='/scolar' element={<Scolar></Scolar>}></Route>


                <Route path="/login" element={<Login></Login>}></Route>

                <Route path="/register" element={<Register></Register>}></Route>

                <Route path="/addcampaign" element={<AddCampaign></AddCampaign>}></Route>


                <Route path='/campaign/:campaignId' element={
                    <HelpDetails></HelpDetails>}></Route>

            </Routes>
            <React.Fragment />
        </div>
    );
}

export default Routesin;