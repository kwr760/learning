import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';

import styles from './styles.css';

function AppBar({ toggleDrawer, email }) {
  const loginLink = email || <Link to="/login">log in</Link>;

  return (
    <div className={styles.appBar}>
      <IconButton
        onClick={toggleDrawer}
        icon="bars"
        iconClass={styles.icon}
        buttonClass={styles.iconButton}
      />
      <div className={styles.heading}>Coder daily</div>
      <div className={styles.linkContainer}>{loginLink}</div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  email: PropTypes.string,
};

export default AppBar;
