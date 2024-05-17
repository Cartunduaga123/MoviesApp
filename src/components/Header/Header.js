import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css';

function HeaderComponent() {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false); // Nuevo estado para controlar el scroll
    const navigate = useNavigate();

    // Función para manejar el cambio de opacidad del encabezado al hacer scroll
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, text: 'Home', route: '/' },
        { id: 4, text: 'About', route: '/about' },
    ];


    const handleNavigation = (route) => {
        navigate(route);
        setNav(false); 
    };

    return (
        <div className={`HeaderComponent ${scrolled ? 'scrolled' : ''}`}>
            <div className='bg-[#17202A] flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-white'>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
                    <Link to="/" className="logo-link">Cineflix</Link>
                </h1>

                <ul className='hidden md:flex'>
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
                            onClick={() => handleNavigation(item.route)}
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>

                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                <ul
                    className={
                        nav
                            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#17202A] ease-in-out duration-500'
                            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                    }
                >
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Cineflix.</h1>

                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
                            onClick={() => handleNavigation(item.route)}
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HeaderComponent;
