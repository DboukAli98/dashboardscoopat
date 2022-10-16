import React from 'react';
import "./sidebar.scss";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className='logo'>scoopat admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardOutlinedIcon className='icon'/>
            <Link to="/" style={{ textDecoration: "none" }}>
            <span>
              Dashboard
            </span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PeopleOutlineOutlinedIcon className='icon'/>
            <Link to="/users" style={{ textDecoration: "none" }}>
            <span>
              Inspectors
            </span>
            </Link>
          </li>
          <li>
            <GrassOutlinedIcon className='icon'/>
            <Link to="/farms" style={{ textDecoration: "none" }}>
            <span>
              Farms
            </span>
            </Link>
          </li>
          <li>
            <AgricultureOutlinedIcon className='icon'/>
            <Link to="/farmers" style={{ textDecoration: "none" }}>
            <span>
              Farmers
            </span>
            </Link>
          </li>
          <li>
            <PolicyOutlinedIcon className='icon'/>
            <Link to="/inspections" style={{ textDecoration: "none" }}>
            <span>
              Inspections
            </span>
            </Link>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className='icon'/>
            <span>
              System Health
            </span>
          </li>
          <li>
            <PsychologyOutlinedIcon className='icon'/>
            <span>
              Logs
            </span>
          </li>
          <li>
            <SettingsOutlinedIcon className='icon'/>
            <span>
              Settings
            </span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountBoxOutlinedIcon className='icon'/>
            <span>
              Profile
            </span>
          </li>
          <li>
            <LogoutOutlinedIcon className='icon'/>
            <span>
              Logout
            </span>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Sidebar