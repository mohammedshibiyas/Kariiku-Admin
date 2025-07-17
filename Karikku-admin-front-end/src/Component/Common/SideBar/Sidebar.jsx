import React from 'react'
import './Sidebar.scss'
import { FiHome } from 'react-icons/fi'
import { IoCartOutline } from 'react-icons/io5'
import { BsBoxSeam, BsFileBarGraph, BsPersonCircle } from 'react-icons/bs'
import { CiSettings, CiViewList } from 'react-icons/ci'
import { LuLogOut } from 'react-icons/lu'

const Sidebar = () => {
    return (
        <div className='SidebarMaibwrapper'>
           <div className="container-fluid">
             <div className="sidebar">
                <div className="head-section">
                    <div className="logo">
                        <img src="/Images/thara-logo.svg" alt="" />
                    </div>
                    <div className="label">
                        <h3>THARA INDUSTRIES</h3>
                        <p>Super Admin</p>
                    </div>
                </div>

                <button className='dashboard-btn'>
                    <FiHome className='home' /><span>Dashboard</span>
                </button>
                <div className="inventory">
                    <h3>Inventory</h3>
                    <table>
                        <tr className='head'>
                            <td className='icon-row'><IoCartOutline className='icon' /></td>
                            <td className='name'>Products</td>
                        </tr>
                         <tr className='head'>
                            <td className='icon-row'><BsFileBarGraph className='icon' /></td>
                            <td className='name'>Brands</td>
                        </tr>
                         <tr className='head'>
                            <td className='icon-row'><BsPersonCircle  className='icon' /></td>
                            <td className='name'>Categories</td>
                        </tr>
                         <tr className='head'>
                            <td className='icon-row'><BsBoxSeam className='icon' /></td>
                            <td className='name'>Batch</td>
                        </tr>
                         <tr className='head'>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Stock</td>
                        </tr>
                         <tr className='head'>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Warehouse</td>
                        </tr>
                    </table>
                    <h3>Orders</h3>
                    <table>
                          <tr className='head'>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Sales orders</td>
                        </tr>
                         <tr className='head'>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Returns</td>
                        </tr>
                           <tr className='head'>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Purchase orders</td>
                        </tr>
                         <tr className='head'>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Invoices</td>
                        </tr>
                    </table>
                    <h3>Vendors</h3>
                    <table>
                             <tr className='head'>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Suppliers</td>
                        </tr>
                           <tr className='head'>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Distributors</td>
                        </tr>
                         <tr className='head'>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>SuperMarket</td>
                        </tr>
                    </table>
                     <h3>User Roles</h3>
                    <table>
                             <tr className='head'>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>WH Managers</td>
                        </tr>
                           <tr className='head'>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Sales managers</td>
                        </tr>
                         <tr className='head'>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Accounts</td>
                        </tr>
                             <tr className='head'>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Drivers</td>
                        </tr>
                         <tr className='head'>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Admin</td>
                        </tr>
                              <tr className='head'>
                            <td className='icon-row'><CiSettings  className='icon' /></td>
                            <td className='name'>Settings</td>
                        </tr>
                         <tr className='head'>
                            <td className='icon-row'><LuLogOut  className='icon' /></td>
                            <td className='name'>Logout</td>
                        </tr>
                    </table>

                </div>
            </div>
           </div>
        </div>
    )
}

export default Sidebar

