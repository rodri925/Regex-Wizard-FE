import React from 'react';
import styles from './styles/LandingPageBottom.module.css';

const LandingPageBottom = () => (
  <div className={styles.bigContainer}>
    <div className={styles.smallContainer}>
      <h2>Missions</h2>
      <hr />
      <p>
        After training, you must practice.
        <br />
        Check out the Missions page for
        <br />
        more
        <span> Regex </span>
        challenges!
      </p>
      <a href="./Missions"><span>Missions</span></a>
    </div>
    <div className={`${styles.smallContainer} ${styles.smallContainer2}`}>
      <h2>Become a Wizard</h2>
      <hr />
      <p>
        Save your progress.
        <br />
        Track your achievements.
        <br />
        Post custom
        <span> Scrolls.</span>
      </p>
      <a href="./Login"><span>Sign Up</span></a>
    </div>
    <div className={styles.smallContainer}>
      <h2>Scrolls</h2>
      <hr />
      <p>
        Have a useful
        <span> Regex </span>
        for parsing
        <br />
        files, emails, or documents?
        <br />
        Post it here!
      </p>
      <a href="./Scrolls"><span>Scrolls</span></a>
    </div>
  </div>
);
export default LandingPageBottom;
