import { BorderOuterOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Image } from "antd";
import Link from "next/link";
import { useState } from "react";
import styles from "../../../styles/Navbar.module.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className={styles.header}>
      <div className={styles.logoNav}>
        <div className={styles.logoContainer}>
          <a href="#">
          <BorderOuterOutlined  className={styles.logo} />
          </a>
        </div>

        <ul className={click ? `${styles.navOptions} ${styles.active}` : `${styles.navOptions}`}>
          <li className={styles.option} onClick={closeMobileMenu}>
            <a href="#">ABOUT</a>
          </li>
          <li className={styles.option} onClick={closeMobileMenu}>
            <a href="#">CONTACT</a>
          </li>
          <li className={styles.option} onClick={closeMobileMenu}>
            <a href="#">BLOG</a>
          </li>
          <li className={ `${styles.option} ${styles.mobileOption}`} onClick={closeMobileMenu}>
            <a href="#">SIGN-IN</a>
          </li>
          <li className={ `${styles.option} ${styles.mobileOption}`} onClick={closeMobileMenu}>
            <a href="" className="sign-up">
              SIGN-UP
            </a>
          </li>
        </ul>
      </div>
      <ul className={styles.signinUp}>
        <li className={styles.signIn} onClick={closeMobileMenu}>
          <a href="#">SIGN-IN</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="" className={styles.signupBtn}>
            SIGN-UP
          </a>
        </li>
      </ul>
      <div className={styles.mobileMenu} onClick={handleClick}>
        {click ? (
          <BorderOuterOutlined className={styles.menuIcon} />
        ) : (
          <BorderOuterOutlined className={styles.menuIcon} />
        )}
      </div>
    </div>
  );
};

export default Navbar;

