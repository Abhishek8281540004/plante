import React from 'react'
import './sidemenu.css'
import logo from '../../assets/logo.png'
import {IoMdSpeedometer} from 'react-icons/io'
import {MdDeliveryDining,MdOutlineExplore, MdOutlinePermContactCalendar} from "react-icons/md"
import {BsTrophy} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {BiTrendingUp} from 'react-icons/bi'
import {BsCreditCard2Front} from 'react-icons/bs'

function Sidemenu() {
  return (
    <div className='sidebar'>
      <div className="logoDiv flex">
        <img className='logo' src={logo} alt="image name" />
        <h2 className='plante'>plante</h2>
      </div>
      <div className="menuDiv">
        <h3 className='divTitle'>
          QUICK MENU
        </h3>
        <ul className="menulists">
          <li className="listItem">
            <a href="" className="menuLink">
              <  IoMdSpeedometer className='icon'/>
              <span className="smaillText">
                Dash board
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="" className="menuLink flex">
              < MdDeliveryDining className='icon'/>
              <span className="smaillText">
                My orders
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="" className="menuLink flex">
              < MdOutlineExplore className='icon'/>
              <span className="smaillText">
                Explore
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="" className="menuLink flex">
              < BsTrophy className='icon'/>
              <span className="smaillText">
                Products
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className='divTitle'>
          SETTINGS
        </h3>
        <ul className="menulists grid">
          <li className="listItem">
            <a href="" className="menuLink flex">
              < CgProfile  className='icon'/>
              <span className="smaillText">
              Profile
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="" className="menuLink flex">
              <BiTrendingUp className='icon'/>
              <span className="smaillText">
               Trends
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="" className="menuLink flex">
              < MdOutlinePermContactCalendar className='icon'/>
              <span className="smaillText">
                contact
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="" className="menuLink flex">
              <BsCreditCard2Front className='icon'/>
              <span className="smaillText">
                Billing
              </span>
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Sidemenu
