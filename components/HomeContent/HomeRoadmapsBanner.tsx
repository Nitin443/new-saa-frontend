import styles from "../../styles/HomeRoadmapsBanner.module.scss";
import { Button, Image } from "antd";
import SaaButton from "../Custom/SaaButton";

interface Props extends React.PropsWithChildren<any> {}

const HomeRoadmapsBanner: React.FC<Props> = ({}) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.rightDiv}>
        <Image
          preview={false}
          alt="banner image"
          width={400}
          height={400}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYFhJMcSN9TfGxb3ZrkEbDNkoM7jWDVlEXEg&usqp=CAU"
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
        <SaaButton style={{backgroundColor: '#595959'}}>Explore Roadmaps </SaaButton>
        </div>
      </div>
    </div>
  );
};

export default HomeRoadmapsBanner;
