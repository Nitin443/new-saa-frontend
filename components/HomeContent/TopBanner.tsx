import styles from "../../styles/TopBanner.module.scss";
import { Button, Image } from "antd";

interface Props extends React.PropsWithChildren<any> {}

const TopBanner: React.FC<Props> = ({}) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.leftDiv}>
        <h1 className={styles.h1Tag}>
          Build yourself with Top Mentors and Live in progressive Environment
        </h1>

        <p className={styles.pTag}>
          Don&apos;t worry about Tier&apos;s of Colleges Now you can live & grow with top
          People&apos;s.
        </p>

        <div className={styles.btnDiv}>
          <Button className={styles.btn}>Join us </Button>

          <Button  className={styles.btnStyle} >Explore more </Button>
        </div>
      </div>

      <div className={styles.rightDiv}>
        <Image
          width={500}
          height={500}
          preview={false}
          alt="banner image"
          src="https://tpsowsaa.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-img.733357c6.png&w=640&q=75"
        />
      </div>
    </div>
  );
};

export default TopBanner;
