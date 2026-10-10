import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assests/Images/Explore_India.png';
import { Dialog } from '@headlessui/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Destinations', link: '/destinations/' },
    { name: 'Themes & Experiences', link: '/experiences' },
    { name: 'Seasons', link: '/seasons' },
    { name: 'Itineraries', link: '/itineraries' },
    { name: 'Travel Journal', link: '/journal' },
];

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  return (
    
        <header className='sticky top-0 z-50 border-b border-charcoal/5 bg-ivory/95 shadow-sm backdrop-blur'>
            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
                <Link to="/" className='flex shrink-0 items-center gap-2'>
                    <img src={logo} alt="" className='h-10 w-auto' />
                    <span className='font-serif text-lg font-semibold text-charcoal'>Exploring India</span>
                </Link>
                <div className="hidden items-center gap-6 xl:flex">
                    {navLinks.map((item, index) => (
                        <Link to={item.link} key={index} className='text-sm font-medium text-charcoal/75 transition hover:text-terracotta'>
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden items-center gap-3 lg:flex">
                    <label className="sr-only" htmlFor="currency">Currency</label>
                    <select id="currency" defaultValue="INR" className="bg-transparent text-sm font-medium text-charcoal focus:outline-none">
                        <option>INR</option><option>USD</option><option>EUR</option>
                    </select>
                    <label className="sr-only" htmlFor="language">Language</label>
                    <select id="language" defaultValue="EN" className="bg-transparent text-sm font-medium text-charcoal focus:outline-none">
                        <option>EN</option><option>HI</option>
                    </select>
                    <Link to="/destinations/" className="rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-terracotta-dark">
                        Plan My Trip
                    </Link>
                </div>
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="rounded-lg p-2 text-charcoal hover:bg-surface xl:hidden"
                    aria-label="Open main menu"
                >
                    <Menu aria-hidden="true" />
                </button>
            </nav>
            <Dialog className='relative z-50 xl:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className='fixed inset-0 bg-charcoal/40' aria-hidden="true" />
                <Dialog.Panel className='fixed inset-y-0 right-0 w-full max-w-sm overflow-y-auto bg-ivory px-6 py-6 shadow-xl'>
                    <div className='flex items-center justify-between'>
                        <Link to="/" className='m-1 p-1'>
                            <span className='font-serif text-lg font-semibold text-charcoal'>Exploring India</span>
                        </Link>
                        <button
                        type='button'
                        onClick={()=> setMobileMenuOpen(false)}
                        className='rounded-lg p-2 text-charcoal hover:bg-surface'
                        aria-label="Close main menu"
                        >
                            <X aria-hidden="true" />
                        </button>
                    </div>
                    <div className='mt-8 space-y-2'>
                        {navLinks.map((item) => (
                            <Link to={item.link} key={item.name} onClick={() => setMobileMenuOpen(false)} className='block rounded-lg px-3 py-3 text-base font-semibold text-charcoal hover:bg-surface hover:text-terracotta'>
                                {item.name}
                            </Link>
                        ))}
                        <Link to="/destinations/" onClick={() => setMobileMenuOpen(false)} className="mt-4 block rounded-full bg-terracotta px-5 py-3 text-center font-semibold text-white hover:bg-terracotta-dark">
                            Plan My Trip
                        </Link>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    
  )
}

export default Navbar