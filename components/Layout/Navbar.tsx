import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { useState } from "react";
import styles from "../../styles/Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className={styles.header}>
      <div className={styles.logoNav}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              alt="logo"
              preview={false}
              src="https://tpsowsaa.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreen-logo.f704c8aa.png&w=96&q=75"
            />
          </Link>
        </div>
      </div>

      <ul
        className={
          click
            ? `${styles.navOptions} ${styles.active}`
            : `${styles.navOptions}`
        }
      >
        <li className={styles.option} onClick={closeMobileMenu}>
          <Link href="/events">EVENTS</Link>
        </li>
        <li className={styles.option} onClick={closeMobileMenu}>
          <Link href="/connect">CONNECT</Link>
        </li>
        <li className={styles.option} onClick={closeMobileMenu}>
          <Link href="/roadmaps">ROADMAPS</Link>
        </li>
        <li
          className={`${styles.option} ${styles.mobileOption}`}
          onClick={closeMobileMenu}
        >
          <Link href="#">SIGN-IN</Link>
        </li>
        <li
          className={`${styles.option} ${styles.mobileOption}`}
          onClick={closeMobileMenu}
        >
          <Link href="" className="sign-up">
            SIGN-UP
          </Link>
        </li>
      </ul>

      <ul className={styles.signinUp}>
        <li className={styles.signIn} onClick={closeMobileMenu}>
          <Link href="#">SIGN-IN</Link>
        </li>
        <li onClick={closeMobileMenu}>
          <Link href="" className={styles.signupBtn}>
            SIGN-UP
          </Link>
        </li>
      </ul>
      <div className={styles.mobileMenu} onClick={handleClick}>
        {click ? <CloseOutlined /> : <MenuOutlined />}
      </div>
    </div>
  );
};

export default Navbar;
