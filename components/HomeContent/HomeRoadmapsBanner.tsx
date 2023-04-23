import styles from "../../styles/HomeRoadmapsBanner.module.scss";
import { Button, Image } from "antd";

interface Props extends React.PropsWithChildren<any> {}

const HomeRoadmapsBanner: React.FC<Props> = ({}) => {
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
          Explore our roadmaps for taking better decision of your career
        </h1>

        <p className={styles.pTag}>
          You can explore and look up into our available roadmaps for career
          decision. Our career roadmaps will help you in better carerr desicion.
        </p>

        <div className={styles.btnDiv}>
          <Button className={styles.btn}>Explore Roadmaps </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeRoadmapsBanner;
