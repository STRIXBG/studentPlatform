import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import SectionNav from "../components/SectionNav";

function Header() {
    return (
        <div>
            <nav className="shadow">
                <div className="flex justify-between items-center py-6 px-10 container mx-auto">
                    <div>
                        {/* Update anchor tags to Link components */}
                        <Link to="/" className="text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer">sPlatform</Link>
                    </div>
                    <div>
                        <div className="hover:cursor-pointer sm:hidden">
                            <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
                            <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
                            <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
                        </div>
                        <div className="flex items-center">
                            <ul className="sm:flex space-x-4 hidden items-center">
                                {/* Update anchor tags to Link components */}
                                <li><Link to="/" className="text-gray-700 hover:text-indigo-600 text-md">Начало</Link></li>
                                <li><Link to="/about" className="text-gray-700 hover:text-indigo-600 text-md">Относно</Link></li>
                                <li><Link to="/friends" className="text-gray-700 hover:text-indigo-600 text-md">Приятели</Link></li>
                                <li><Link to="/rooms" className="text-gray-700 hover:text-indigo-600 text-md">Стаи</Link></li>
                            </ul>
                            <div className="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
                                <h1 className="text-text-gray-600  py-2 hover:cursor-pointer hover:text-indigo-600">Вход</h1>
                                <h1 className="text-text-gray-600  py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-indigo-600 to-green-600 hover:shadow-lg">Регистрация</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <SectionNav />
        </div>
    );
}

export default Header;
