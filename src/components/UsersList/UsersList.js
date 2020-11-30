import React from 'react';
import PropTypes from 'prop-types';

import './UsersList.css';
import { UserItem } from '../UserItem/UserItem';

export const UsersList = ({ randomUsers, query }) => (
  <div className="users">
    {randomUsers
      .filter(randomUser => randomUser.name.first.toLowerCase().includes(query.toLowerCase())
        || randomUser.phone.toLowerCase().includes(query.toLowerCase())
        || randomUser.email.toLowerCase().includes(query.toLowerCase()))
      .map(randomUser => (
        <UserItem key={randomUser.login.uuid} {...randomUser} />
    ))}
  </div>
) ;

UsersList.propTypes = {
  randomUsers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.object.isRequired,
      email: PropTypes.string.isRequired,
      picture: PropTypes.object.isRequired,
      phone: PropTypes.string.isRequired,
    }),
  ),
  query: PropTypes.string.isRequired,
};

UsersList.defaultProps = {
  randomUsers: [],
};