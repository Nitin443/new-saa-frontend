import { MenuOutlined, } from "@ant-design/icons";
import { Image } from "antd";
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
            <Image preview={false} src="https://tpsowsaa.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreen-logo.f704c8aa.png&w=96&q=75" />

          </a>
        </div>

        
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
          <li className={`${styles.option} ${styles.mobileOption}`} onClick={closeMobileMenu}>
            <a href="#">SIGN-IN</a>
          </li>
          <li className={`${styles.option} ${styles.mobileOption}`} onClick={closeMobileMenu}>
            <a href="" className="sign-up">
              SIGN-UP
            </a>
          </li>
        </ul>

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

        <MenuOutlined  />

      </div>
    </div>
  );
};

export default Navbar;

