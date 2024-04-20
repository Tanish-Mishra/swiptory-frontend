import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
        <span className={styles.header__text}>SwipTory</span>
        <div className={styles.header__btn_container}>
            <button className={styles.header__btn}>Register Now</button>
            <button className={styles.header__btn}>Sign In</button>
        </div>
    </div>
  )
}

export default Header