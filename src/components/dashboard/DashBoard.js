import React, { Component } from 'react';
import Notifications from './Notifications';
import TodayTraining from './TodayTraining';
import RecentActivity from './RecentActivity';
import styles from './DashBoard.module.scss';

class DashBoard extends Component {
  render() {
    return(
      <div className={styles.container}>
        <RecentActivity />
        <TodayTraining />
        <Notifications />
      </div>
    )
  }
}

export default DashBoard;