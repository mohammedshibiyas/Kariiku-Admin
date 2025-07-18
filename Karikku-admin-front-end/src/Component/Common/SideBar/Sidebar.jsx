import React from 'react'
import './Sidebar.scss'
import { FiHome } from 'react-icons/fi'
import { IoCartOutline } from 'react-icons/io5'
import { BsBoxSeam, BsFileBarGraph, BsPersonCircle } from 'react-icons/bs'
import { CiSettings, CiViewList } from 'react-icons/ci'
import { LuLogOut } from 'react-icons/lu'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
       const location = useLocation();
  const isActive = (path) => {
        return location.pathname.includes(path);
    };
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
                         <tr className={`head ${isActive('/products') || isActive('/product') ? 'active' : ''}`}>
                            <td className='icon-row'><IoCartOutline className='icon' /></td>
                            <td className='name'>Products</td>
                        </tr>
                         <tr className={`head ${isActive('/brands') || isActive('/brand') ? 'active' : ''}`}>
                            <td className='icon-row'><BsFileBarGraph className='icon' /></td>
                            <td className='name'>Brands</td>
                        </tr>
                         <tr className={`head ${isActive('/categories') || isActive('/category') ? 'active' : ''}`}>
                            <td className='icon-row'><BsPersonCircle  className='icon' /></td>
                            <td className='name'>Categories</td>
                        </tr>
                         <tr className={`head ${isActive('/batch') ? 'active' : ''}`}>
                            <td className='icon-row'><BsBoxSeam className='icon' /></td>
                            <td className='name'>Batch</td>
                        </tr>
                         <tr className={`head ${isActive('/stock') ? 'active' : ''}`}>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Stock</td>
                        </tr>
                         <tr className={`head ${isActive('/warehouse') ? 'active' : ''}`}>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Warehouse</td>
                        </tr>
                    </table>
                    <h3>Orders</h3>
                    <table>
                          <tr className={`head ${isActive('/sales-orders') || isActive('/sales') ? 'active' : ''}`}>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Sales orders</td>
                        </tr>
                         <tr className={`head ${isActive('/returns') || isActive('/return') ? 'active' : ''}`}>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Returns</td>
                        </tr>
                           <tr className={`head ${isActive('/purchase-orders') || isActive('/purchase') ? 'active' : ''}`}>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Purchase orders</td>
                        </tr>
                         <tr className={`head ${isActive('/invoices') || isActive('/invoice') ? 'active' : ''}`}>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Invoices</td>
                        </tr>
                    </table>
                    <h3>Vendors</h3>
                    <table>
                             <tr className={`head ${isActive('/suppliers') || isActive('/supplier') ? 'active' : ''}`}>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Suppliers</td>
                        </tr>
                           <tr className={`head ${isActive('/distributors') || isActive('/distributor') ? 'active' : ''}`}>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Distributors</td>
                        </tr>
                         <tr className={`head ${isActive('/supermarket') ? 'active' : ''}`}>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>SuperMarket</td>
                        </tr>
                    </table>
                     <h3>User Roles</h3>
                    <table>
                             <tr className={`head ${isActive('/wh-managers') || isActive('/warehouse-managers') ? 'active' : ''}`}>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>WH Managers</td>
                        </tr>
                           <tr className={`head ${isActive('/sales-managers') ? 'active' : ''}`}>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Sales managers</td>
                        </tr>
                         <tr className={`head ${isActive('/accounts') || isActive('/account') ? 'active' : ''}`}>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Accounts</td>
                        </tr>
                             <tr className={`head ${isActive('/drivers') || isActive('/driver') ? 'active' : ''}`}>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Drivers</td>
                        </tr>
                         <tr className={`head ${isActive('/admin') ? 'active' : ''}`}>
                            <td className='icon-row'><CiViewList  className='icon' /></td>
                            <td className='name'>Admin</td>
                        </tr>
                              <tr className={`head ${isActive('/settings') ? 'active' : ''}`}>
                            <td className='icon-row'><CiSettings  className='icon' /></td>
                            <td className='name'>Settings</td>
                        </tr>
                         <tr className={`head ${isActive('/logout') ? 'active' : ''}`}>
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

