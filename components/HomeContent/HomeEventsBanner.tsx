import styles from "../../styles/HomeEventsBanner.module.scss";
import { Button, Image } from "antd";

interface Props extends React.PropsWithChildren<any> {}

const HomeEventsBanner: React.FC<Props> = ({}) => {
  return (
    <div className={styles.mainDiv}>

      <div className={styles.rightDiv}>
        <Image
          preview={false}
          alt="banner image"
          src="https://tpsowsaa.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-img.733357c6.png&w=640&q=75"
        />
      </div>

      <div className={styles.leftDiv}>
        <h1 className={styles.h1Tag}>
          Join Events accross the world and get knowledge of different areas.
        </h1>

        <p className={styles.pTag}>
          You can join events from anywhere and can enjoy knowledge and informations of events from top mentores and universities.
        </p>

        <div className={styles.btnDiv}>
          <Button className={styles.btn}>Join Events </Button>

          
        </div>
      </div>
    </div>
  );
};

export default HomeEventsBanner;
