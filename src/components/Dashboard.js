import React, { useState } from 'react';
import styles from './styles/Dashboard.module.css';

const Dashboard = () => {
  /* 1. Replace use state nums with completed missions pulled from DB when ready
     2. Need to pull a the first incomplete lesson and first incomplete mission.
     Must render something different if all lessons/all mission complete.
   */
  const [lessonPercent, setLessonPercent] = useState(() => 7 * 4);
  const [missionPercent, setMissionPercent] = useState(() => 10 * 4);

  const fakeScrolls = [
    {
      user: 'Mickey',
      regex: '[aeiou]',
      desc: 'this regex finds vowels',
    },
    {
      user: 'Borby',
      regex: '/ugly/',
      desc: 'this regex finds the ugly',
    },
    {
      user: 'Egg',
      regex: '...',
      desc: 'this regex finds 3 letter words',
    },
  ];
  return (
    <div className={styles.outerContainer}>
      <h1>Hi User!</h1>
      <div className={styles.innerContainer}>
        <div className={styles.info}>
          <div className={styles.progress}>
            <span>
              Training Progress:&nbsp;
              {lessonPercent}
              %
            </span>
            <div className={styles.BarOuter}>
              <div className={styles.BarInner} style={{ width: `${lessonPercent}%` }} />
            </div>
            <span>
              Mission Progress:&nbsp;
              {missionPercent}
              %
            </span>
            <div className={styles.BarOuter}>
              <div className={styles.BarInner} style={{ width: `${missionPercent}%` }} />
            </div>
          </div>
          <div className={styles.missionIncompletes}>
            <div className={styles.incompleteBox}>
              <p>
                Start Lesson:
                <br />
                Lesson
              </p>
              <a href="./Training">Start Now</a>
            </div>
            <div className={styles.incompleteBox}>
              <p>
                Start Mission:
                <br />
                Mission
              </p>
              <a href="./Missions">Start Now</a>
            </div>
          </div>
        </div>
        <div className={styles.personalScrolls}>
          <span>
            Personal Scrolls
          </span>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
