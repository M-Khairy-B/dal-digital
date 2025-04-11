import { FC, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import MoonIcon from '../../../ui/icons/MoonIcon';
import OpenIcon from '../../../ui/icons/OpenIcon';
import CloseIcon from '../../../ui/icons/CloseIcon';
import SunnyIcon from '../../../ui/icons/SunnyIcon';
import { CookieEnum, deleteCookie } from '../../../../utilities/cookie';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface IProps { }

const Header: FC<IProps> = () => {
    const [isUserMenuOpen, setUserMenuOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dark, setDark] = useState(false);
    const navigate = useNavigate();

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    };

    const signOut = () => {
        deleteCookie(CookieEnum.token);
        navigate('/login');
    };

    return (
        <header>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
                                aria-controls="mobile-menu"
                                aria-expanded={isMobileMenuOpen}
                                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <OpenIcon className={`${isMobileMenuOpen ? 'hidden' : 'block'} size-6`} />
                                <CloseIcon className={`${isMobileMenuOpen ? 'block' : 'hidden'} size-6`} />
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <img className="h-8 w-auto" src="https://www.dal-digital.com/wp-content/uploads/2022/10/Logo-e1667135514660.png" alt="Your Company" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                            }`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            `rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                            }`
                                        }
                                    >
                                        About
                                    </NavLink>
                                    <NavLink
                                        to="/solutions"
                                        className={({ isActive }) =>
                                            `rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                            }`
                                        }
                                    >
                                        Solutions
                                    </NavLink>
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            `rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                            }`
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="relative ml-3">
                                <div className='flex items-center gap-1'>
                                    <button
                                        onClick={() => darkModeHandler()}
                                        id="theme-toggle"
                                        data-tooltip-target="tooltip-toggle"
                                        type="button"
                                        className="text-gray-500 block items-center justify-center dark:text-gray-400 hover:bg-gray-100 w-10 h-10 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                                    >
                                        {dark && <SunnyIcon />}
                                        {!dark && <MoonIcon />}
                                    </button>

                                    <button
                                        type="button"
                                        className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
                                        id="user-menu-button"
                                        aria-expanded={isUserMenuOpen}
                                        onClick={() => setUserMenuOpen(!isUserMenuOpen)}
                                    >
                                        <span className="sr-only">Open user menu</span>
                                        <Avatar className='cursor-pointer' icon={<UserOutlined />} />
                                    </button>
                                </div>

                                {isUserMenuOpen && (
                                    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                                        <button
                                            onClick={signOut}
                                            className="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                                        >
                                            Sign out
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            <NavLink to="/" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Home</NavLink>
                            <NavLink to="/about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</NavLink>
                            <NavLink to="/solutions" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Solutions</NavLink>
                            <NavLink to="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</NavLink>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
