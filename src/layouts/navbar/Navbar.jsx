import React from 'react'
import {navLinks} from '../../context/Content';
import { Link } from 'react-router-dom';
import logo from '../../assests/Images/Explore_India.png';
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
                <div className='flex lg:hidden'>
                    <button
                    type='button'
                    onClick={()=> setMobileMenuOpen(true)}
                    className='m-2.5  inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                    >
                    <span className="sr-only">Open main menu</span>

                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navLinks.map((item, index) => (
                        <Link to={item.link} key={index} className='text-sm font-medium text-gray-700 hover:text-indigo-600'>
                            {item.name}
                        </Link>
                    ))}
                </div>
                             
            </nav>
            <Dialog className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen} >
                <div classname='fixed inset-0 z-50'/>
                <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10'>
                    <div className='flex items-center justify-between'>
                        <Link to="/" className='m-1 p-1'>
                            <span className='sr-only'>Explore India</span>
                            <img src={logo} alt="logo" className='h-12 w-auto' />
                        </Link>
                        <button
                        type='button'
                        onClick={()=> setMobileMenuOpen(false)}
                        className='m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                        >
                        <span className="sr-only">Close main menu</span>

                        </button>
                    </div>
                    <div className='mt-6 flow-root'>
                        <div className='-my-6 divide-y divide-zinc-500/10'>
                            <div className='space-y-2 py-6'>
                                {navLinks.map((item, index) => (
                                    <Link to={item.link} key={index} className='mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-zinc-900 hover:bg-zinc-400/10'>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div></Dialog.Panel> 

            </Dialog>
        </header>
    </div>
  )
}

export default Navbar