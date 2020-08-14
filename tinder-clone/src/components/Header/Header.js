import React from 'react';
import styles from './Header.module.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

function Header() {
  return (
    <div className={styles.header}>
      <IconButton>
      <PersonIcon className={styles.header__icon} fontSize="large" />
      </IconButton>
      <img className={styles.header__logo} src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="Tinder" />
      <IconButton>
        <ForumIcon className={styles.header__icon} fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
