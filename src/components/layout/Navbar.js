import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link to='/' className={styles.navLogo}>
          Personal Training
        </Link>
        <SignedOutLinks />
        <SignedInLinks />
      </div>
    </nav>
  )
}

export default Navbar;