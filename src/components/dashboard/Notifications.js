import React from 'react';
import styles from './Notifications.module.scss';

const Notifications = () => {
  return(
    <div className={styles.container}>
        <p>Notifications</p>
        <button className={styles.button}>Button</button>
    </div>
  )
}

export default Notifications;