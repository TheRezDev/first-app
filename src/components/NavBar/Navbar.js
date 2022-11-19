import React from 'react';
import styles from './navBar.module.css';
const Navbar = ({ totalItems }) => {
    console.log("navbar.js rendered");
    return ( 
        <header className={styles.navBar}>
            <h2>Sami and Reza Shopping</h2>
            <span>{totalItems}</span>
        </header>
    );
}

export default Navbar;


