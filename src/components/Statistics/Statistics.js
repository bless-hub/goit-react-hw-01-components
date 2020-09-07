import React from 'react';
import styles from './Statistic.module.scss';

const Statistics = ({ statistics, title }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
        {statistics.map(da => (
          <li key={da.id} className={styles.item}>
            <span className={styles.label}>{da.label}</span>
            <span className={styles.percentage}>{da.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
