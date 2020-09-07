import React from 'react';

import HistoryItem from './HistoryItem';
import styles from './Transaction.module.scss';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <HistoryItem {...item} key={item.id} />
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;
