import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { IoCloseSharp } from 'react-icons/io5'
import './navbar.css'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='nav sticky top-0'>
            <div className="toggle-icon w-fit pt-3 z-50 md:hidden" onClick={() => setToggle(!toggle)}>
                {
                    toggle ? <IoCloseSharp className='w-6 h-6 text-white md:hidden'></IoCloseSharp> : <HiOutlineMenuAlt1 className='w-6 h-6 text-white md:hidden'></HiOutlineMenuAlt1>
                }
            </div>
            <nav className='px-0 md:px-10 py-3 flex justify-between items-center'>
                <div className="logo hidden md:block">
                    <Link to='/'><h1 className='text-5xl font-bold'>Ayon.</h1></Link>
                </div>
                <div className={`nav nav-item flex flex-col md:flex-row w-full md:w-auto text-center absolute md:static duration-500 ease-in-out ${toggle ? "top-10" : "top-[-200px]"}`}>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/review">Review</CustomLink>
                    <CustomLink to="/dashboard">Dashboard</CustomLink>
                    <CustomLink to="/blog">Blog</CustomLink>
                    <CustomLink to="/contact">Contact Us</CustomLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;