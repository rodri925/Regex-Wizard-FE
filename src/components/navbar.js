import React, { useState } from 'react';
import styles from './styles/navbar.module.css';
import useWindowWidth from './hooks/useWindowWidth';
//  Get dynamic width using custom hook, using useLayoutEffect.
//  This allows us to have a responsive hamburger menu.
const Navbar = () => {
  const [hamToggle, setHamToggle] = useState(false);
  const width = useWindowWidth();

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.Title}>
          <a href="./"><em>Regex Wizard</em></a>
          <input type="checkbox" id="viewMenu" aria-label="Open the menu" className={styles.hamCheck} onChange={() => setHamToggle(!hamToggle)} />
          <div className={styles.burger}>
            {' '}
            <div className={styles.hamLine} />
            <div className={styles.hamLine} />
            {' '}
            <div className={styles.hamLine} />
          </div>
        </div>
        <a href="./Training" className={styles.navLinks} style={{ display: width > 600 ? 'block' : 'none' }}>Training</a>
        <a href="./Missions" className={styles.navLinks} style={{ display: width > 600 ? 'block' : 'none' }}>Missions</a>
        <a href="./Dashboard" className={styles.navLinks} style={{ display: width > 600 ? 'block' : 'none' }}>Dashboard</a>
        <a href="./Scrolls" className={styles.navLinks} style={{ display: width > 600 ? 'block' : 'none' }}>Scrolls</a>
        <a href="./Training" className={styles.navLinksCol} style={{ display: hamToggle && width < 600 ? 'block' : 'none' }}>Training</a>
        <a href="./Missions" className={styles.navLinksCol} style={{ display: hamToggle && width < 600 ? 'block' : 'none' }}>Missions</a>
        <a href="./Dashboard" className={styles.navLinksCol} style={{ display: hamToggle && width < 600 ? 'block' : 'none' }}>Dashboard</a>
        <a href="./Scrolls" className={styles.navLinksCol} style={{ display: hamToggle && width < 600 ? 'block' : 'none' }}>Scrolls</a>
      </nav>
    </div>
  );
};

export default Navbar;
