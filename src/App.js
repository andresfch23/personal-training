import React, { Component } from 'react';
import logo from './assets/images/gym.png';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          
        </header>
      </div>
    );
  }
}

export default App;
