import { faHome, faStream } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import "./Dashboard.css"
import DashNavbar from './DashNavbar/DashNavbar';
import Sidebar from './Sidebar/Sidebar';
const Dashboard = () => {
    return (


        <div className='dashboard'>

            <Sidebar></Sidebar>

            <div className="dashboardContainer">
                <DashNavbar></DashNavbar>
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Dashboard;