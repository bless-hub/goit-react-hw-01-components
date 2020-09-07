import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import Friendlist from './Friendlist/Friendlist';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from './Profile/user.json';
import stats from './Statistics/stats.json';
import list from './Friendlist/list.json';
import transactions from './TransactionHistory/transactions.json';

export default function App() {
  return (
    <>
      <h2>Profile</h2>
      <Profile {...user} />
      <Statistics title="UPLOAD STATS" statistics={stats} />
      <Friendlist friends={list} />
      <TransactionHistory items={transactions} />
    </>
  );
}
