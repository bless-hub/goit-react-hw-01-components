import React from 'react';
import FriendListItem from './FriendListItem';
import styles from './Friendlist.module.scss';

const FriendList = ({ friends }) => (
  <ul className={styles.friendlist}>
    {friends.map(friend => (
      <FriendListItem {...friend} key={friend.id} />
    ))}
  </ul>
);

export default FriendList;
