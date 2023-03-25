import Link from 'next/link';
import Image from 'next/image';
import styles from "../../../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link className={styles.navbarLogo} href="/">
            <Image src="/logo.svg" alt="Logo" width={80} height={80} />
            My Website
        </Link>
        <ul className={styles.navbarLinks}>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href="/">
              Home
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href="/about">
              About
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href="/contact">
              Contact Us
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link className={`${styles.navbarLink} ${styles.button} ${styles.navbarLink}`} href="/login">
              Login/Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
