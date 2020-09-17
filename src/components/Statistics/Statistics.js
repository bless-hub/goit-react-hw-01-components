import React from 'react';
import styles from './Statistic.module.scss';
import PropTypes from 'prop-types';

const Statistics = ({ statistics, title }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
        {statistics.map(user => (
          <li key={user.id} className={styles.item}>
            <span className={styles.label}>{user.label}</span>
            <span className={styles.percentage}>{user.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
