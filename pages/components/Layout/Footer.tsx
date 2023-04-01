import { Image } from "antd";
import styles from "../../../styles/Footer.module.scss";
import { FaEnvelope, FaPhone, FaAddressBook } from "react-icons/fa";

interface Props extends React.PropsWithChildren<any> {}

const Footer: React.FC<Props> = ({}) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.subTopDiv}>
        <div>
          <div className={styles.logoDiv}>
            <a href="#">
              <Image
                preview={false}
                src="https://tpsowsaa.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreen-logo.f704c8aa.png&w=96&q=75"
              />
            </a>{" "}
            <span className={styles.name}>SAA</span>
          </div>

          <p>
            {" "}
            SAA is a Student Awaereness Application. We want to change stundent
            environment. This is our mission to change world education syestem.{" "}
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

        <div>seriv</div>

        <div>logo</div>

        <div>logo</div>
      </div>
    </div>
  );
};

export default Footer;
