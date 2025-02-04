import React, { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg px-2">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Left: Logo */}
                    <div className="flex items-center space-x-7">
                        <a href="#" className="text-lg font-semibold text-gray-700">
                            Trendora
                        </a>
                        
                        <div className="hidden md:flex items-center">
                            <input type="text" 
                                placeholder="Search products, brands..."
                                className="border border-gray-300 rounded-md px-3 py-2 w-64 focus:outline-none"/>
                            
                        </div>
                    </div>

                    <div className="hidden md:flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-indigo-500 transition duration-300">Home</a>
                            <a href="#" className="text-gray-600 hover:text-indigo-500 transition duration-300">Shop</a>
                            <a href="#" className="text-gray-600 hover:text-indigo-500 transition duration-300">Collections</a>
                            <a href="#" className="text-gray-600 hover:text-indigo-500 transition duration-300">Offers</a>
                        </div>
                    {/* Right: Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-3">
                        <a href="#" className="text-gray-600 hover:text-indigo-500 transition">Login</a>
                        <a href="#" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition">
                            Sign Up
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                            <svg className="w-6 h-6 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden">
                    <ul className="bg-gray-100 text-gray-700 text-center">
                        <li className="py-3 border-b"><a href="#">Home</a></li>
                        <li className="py-3 border-b"><a href="#">Shop</a></li>
                        <li className="py-3 border-b"><a href="#">About</a></li>
                        <li className="py-3 border-b"><a href="#">Contact</a></li>
                        <li className="py-3"><a href="#">Login</a></li>
                        <li className="py-3"><a href="#" className="bg-indigo-500 text-white px-4 py-2 rounded-md">Sign Up</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
