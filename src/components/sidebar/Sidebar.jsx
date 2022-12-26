import React from 'react'
import './Sidebar.css';
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link exact to="/" className='link'>
                            <li className="sidebarListItem active">
                                <LineStyle className='sidebarIcons' />Home
                            </li>
                        </Link>
                        <Link exact to="/" className='link'>
                            <li className="sidebarListItem">
                                <Timeline className='sidebarIcons' />Analytics
                            </li>
                        </Link>
                        <Link exact to="/" className='link'>
                            <li className="sidebarListItem">
                                <TrendingUp className='sidebarIcons' />Sales
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className='link'>
                            <li className="sidebarListItem active">
                                <PermIdentity className='sidebarIcons' />Users
                            </li>
                        </Link>
                        <Link to="/products" className='link'>
                            <li className="sidebarListItem">
                                <Storefront className='sidebarIcons' />Products
                            </li>
                        </Link>
                        <Link to="/products" className='link'>
                            <li className="sidebarListItem">
                                <AttachMoney className='sidebarIcons' />Transactions
                            </li>
                        </Link>
                        <Link to="/" className='link'>
                            <li className="sidebarListItem">
                                <BarChart className='sidebarIcons' />Reports
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <MailOutline className='sidebarIcons' />Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className='sidebarIcons' />Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className='sidebarIcons' />Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <WorkOutline className='sidebarIcons' />Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcons' />Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className='sidebarIcons' />Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar