import { LeftOutlined, RightOutlined, RiseOutlined } from "@ant-design/icons";
import styles from "../../styles/CardsSlidesWithTopic.module.scss";
import { Typography } from "antd";
import MediumInfoCard from "../Cards/MediumInfoCard";

const { Title } = Typography;

interface Props extends React.PropsWithChildren<any> {
  title?: string;
  CardData?: any;
}

const CardsSlidesWithTopic: React.FC<Props> = ({}) => {
  return (
    <div className={styles.mainDiv}>
      <Title level={2}>Trending Events</Title>

      <div className={styles.cardMainDiv}>
        {/* <div className={styles.arrowDiv} >
          {" "}
          <LeftOutlined />{" "}
        </div> */}
        <div className={styles.cardContainer}>
          <MediumInfoCard />

          <MediumInfoCard />

          <MediumInfoCard />

          <MediumInfoCard />

        </div>

        {/* <div className={styles.arrowDiv} >
          {" "}
          <RightOutlined />{" "}
        </div> */}
      </div>
    </div>
  );
};

export default CardsSlidesWithTopic;
