import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SignedInLinks.module.scss'

const SignedInLinks = () => {
  return (
    <ul className={styles.container}>
      <li><NavLink to='/'>My Routine</NavLink></li>
      <li><NavLink to='/'>Log Out</NavLink></li>
      <li className={styles.containerUser}><NavLink to='/' className={styles.user}>AC</NavLink></li>
    </ul>
  )
}

export default SignedInLinks;