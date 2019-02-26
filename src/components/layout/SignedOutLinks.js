import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SignedOutLinks.module.scss';

const SignedOutLinks = () => {
  return (
    <ul className={styles.container}>
      <li><NavLink to='/'>Sign Up</NavLink></li>
      <li><NavLink to='/'>Login</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks;