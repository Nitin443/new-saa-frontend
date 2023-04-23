import styles from "../../styles/HomeConnectBanner.module.scss";
import { Button, Image } from "antd";

interface Props extends React.PropsWithChildren<any> {}

const HomeConnectBanner: React.FC<Props> = ({}) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.leftDiv}>
        <h1 className={styles.h1Tag}>
          Connect with top Mentor&apos;s accross the world
        </h1>

        <p className={styles.pTag}>
          You can connect with top mentor&apos;s and student&apos;s of top universities and companies. you can ask anything related your career and other&apos;s.
        </p>

        <div className={styles.btnDiv}>
          <Button className={styles.btn}>Connect </Button>

         
        </div>
      </div>

      <div className={styles.rightDiv}>
        <Image
          preview={false}
          alt="banner image"
          src="https://tpsowsaa.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-img.733357c6.png&w=640&q=75"
        />
      </div>
    </div>
  );
};

export default HomeConnectBanner;
