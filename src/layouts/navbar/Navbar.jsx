import React from 'react'
import {navLinks} from '../../context/Content';
import { Link } from 'react-router-dom';
import logo from '../../assests/Explore_India.png';
import { Dialog } from '@headlessui/react';
const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  return (
    <div>
        <header className='absolute top-0 inset-x-0 z-50'>
            <nav className="flex items-center justify-between w-full py-2 px-4 bg-white shadow-md">
                <div className="flex lg:flex-1">
                    <Link to="/" className='m-1 p-1'>
                    <span className='sr-only'>Explore India</span>
                    <img src={logo} alt="logo" className='h-12 w-auto' />
                    </Link>
                </div>
                <div className='flex '>
                    <button
                    type='button'
                    onClick={()=> setMobileMenuOpen(true)}
                    className='m-2.5    '
                    >
                    <span className="sr-only">Open main menu</span>

                    </button>
                </div>
                <div className="menu">
                    {navLinks.map((item, index) => (
                        <Link to={item.link} key={index} className='menu-item'>{item.name}</Link>
                    ))}
                </div>
                             
            </nav>
            <Dialog className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen} >
                <div></div>
            </Dialog>
        </header>
    </div>
  )
}

export default Navbar