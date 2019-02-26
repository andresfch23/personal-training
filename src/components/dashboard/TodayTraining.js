import React from 'react';
import styles from './TodayTraining.module.scss';
 
const TodayTraining = () => (
  <div className={styles.container}>
    <p>
      Training day
    </p>
    <button className={styles.button}>Button</button>
  </div>
);

export default TodayTraining;