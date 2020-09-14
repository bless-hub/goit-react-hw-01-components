import React from 'react';
import FriendListItem from './FriendListItem';
import styles from './Friendlist.module.scss';
import PropTypes, { arrayOf } from 'prop-types';

const FriendList = ({ friends }) => (
  <ul className={styles.friendlist}>
    {friends.map(friend => (
      <FriendListItem {...friend} key={friend.id} />
    ))}
  </ul>
);

FriendList.propTypes = {
  id: PropTypes.number.isRequired,
};

export default FriendList;
