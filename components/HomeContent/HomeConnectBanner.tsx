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
        width={400}
        height={400}
          preview={false}
          alt="banner image"
          src="data:image/jpeg;base64,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"
        />
      </div>
    </div>
  );
};

export default HomeConnectBanner;
