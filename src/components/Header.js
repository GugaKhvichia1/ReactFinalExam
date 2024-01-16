import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const pageNames = {
    '/': 'Home',
    '/projects': 'Projects',
    '/contact': 'Contact',
};

const Header = () => {

    const location = useLocation();
    const currentPageName = pageNames[location.pathname] || 'Unknown Page';

    return (
        <motion.header
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
        <h1>Guga Khvichia</h1>
        <p>Student of BTU</p>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            </ul>
        </nav>
        <p className="currentPage">{currentPageName} Page</p>
        </motion.header>
    );
};

export default Header;