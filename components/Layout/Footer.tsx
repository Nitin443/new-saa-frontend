import { Image, Input } from "antd";
import styles from "../../styles/Footer.module.scss";
import {
  FaEnvelope,
  FaPhone,
  FaAddressBook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import Link from "next/link";

const { Search } = Input;

interface Props extends React.PropsWithChildren<any> {}

const Footer: React.FC<Props> = ({}) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.subTopDiv}>
        <div className={styles.firstDiv} >
          <div className={styles.logoDiv}>
            <a href="#">
              <Image
              alt="logo"
                preview={false}
                src="https://tpsowsaa.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreen-logo.f704c8aa.png&w=96&q=75"
              />
            </a>{" "}
            <span className={styles.name}>SAA</span>
          </div>

          <p >
            {" "}
            SAA is a Student Awaereness Application. We want to change stundent
            environment. This is our mission to change world education system.{" "}
          </p>

          <div className={styles.emailDiv}>
            {" "}
            <FaEnvelope />{" "}
            <span className={styles.email}> tpsowintech@gmail.com </span>{" "}
          </div>

          <div className={styles.emailDiv}>
            {" "}
            <FaPhone /> <span className={styles.email}>
              {" "}
              +91 9897057089{" "}
            </span>{" "}
          </div>

          <div className={styles.emailDiv}>
            {" "}
            <FaAddressBook />{" "}
            <span className={styles.email}>
              {" "}
              01 Muzaffar Nagar, Uttar Pradesh, IND 251001{" "}
            </span>{" "}
          </div>
        </div>

        <div className={styles.secondDiv} >

        <div>
          <h4>Navigation</h4>

          <Link className={styles.emailDiv} href="#">
            {" "}
           <span> Home{" "}  </span>
          </Link>

          <Link className={styles.emailDiv} href="#">
            {" "}
            About{" "}
          </Link>

          <Link className={styles.emailDiv} href="#">
            {" "}
            Sitemap{" "}
          </Link>
        </div>

        <div>
          <h4>For you</h4>

          <Link className={styles.emailDiv} href="#">
            {" "}
            Events{" "}
          </Link>

          <Link className={styles.emailDiv} href="#">
            {" "}
            Connect{" "}
          </Link>

          <Link className={styles.emailDiv} href="#">
            {" "}
            Roadmaps{" "}
          </Link>
        </div>

        </div>

        <div className={styles.thirdDiv} >
          <h4>Subscribe newsletter</h4>

          <p className={styles.pNews}>
            Subscribe our newsletter to get updates about our new events and
            blogs
          </p>

          <div className={styles.searchDiv}>
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Subscribe"
              size="large"
              //  onSearch={onSearch}
            />
          </div>

          <div className={styles.socialDiv}>
            <FaFacebook className={styles.socialIcon} />{" "}
            <FaTwitter className={styles.socialIcon} />{" "}
            <FaLinkedin className={styles.socialIcon} />{" "}
            <FaInstagram className={styles.socialIcon} />
          </div>
        </div>
      </div>

     <div className={styles.bottomDiv} > Copyright &#169;  {new Date().getFullYear()} & All Rights Reserved by {' '} <span className={styles.tpsowName} > Tpsow Intech Pvt Ltd </span>  </div>

    </div>
  );
};

export default Footer;
