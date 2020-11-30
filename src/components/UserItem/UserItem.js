import React from 'react';
import PropTypes from 'prop-types';

import './UserItem.css';

export const UserItem = ({ name: {first}, email, picture: {large}, phone }) => (
  <div className="user__item">
    <div>
      <img src={large} alt={first}/>
    </div>
    <p>{first}</p>
    <p>{phone}</p>
    <p>{email}</p>
  </div>
)

UserItem.propTypes = {
  name: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  picture: PropTypes.object.isRequired,
  phone: PropTypes.string.isRequired,
};