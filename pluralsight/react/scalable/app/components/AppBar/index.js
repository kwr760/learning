/**
 *
 * AppBar
 *
 */

import React from 'react';
import IconButton from '../IconButton';
import { Link } from 'react-router';

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
  toggleDrawer: React.PropTypes.func.isRequired,
  email: React.PropTypes.string,
};

export default AppBar;
