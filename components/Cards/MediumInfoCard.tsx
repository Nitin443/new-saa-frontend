import { Card, Rate, Tag } from "antd";
import styles from "../../styles/MediumInfoCard.module.scss";
const { Meta } = Card;

interface Props extends React.PropsWithChildren<any> {
  title?: string;
  description?: string;
  imageAlt?: string;
  imageUrl?: string;
  rating?: string | number;
  reviews?: string | number;
  tags?: [string];
}

const MediumInfoCard: React.FC<Props> = ({}) => {
  return (
    <div className={styles.mainDiv}>
      <Card
        hoverable={true}
        style={{ width: 300, height: 410 }}
        className={styles.cardStyle}
        bordered={true}
        cover={
          <img
            alt="example"
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/8a/f7f459f9674408947edb8e594a5da3/1200x600_PgM.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50"
            height={225}
          />
        }
      >
        <Meta
          title="Google project management"
          description="skills you'll gain: Organizational Career, Culture, Development 
            Strategic, Thinking, Chnage..."
        />

        <div className={styles.ratingDiv}>
          <span className={styles.rateNum}> 4.8 </span>

          <Rate
            className={styles.ratingStyle}
            allowClear={false}
            defaultValue={1}
            count={1}
          />

          <span className={styles.reviewStyle} > (83.7k reviews) </span>
        </div>

        <div>
          <Tag>Beginner</Tag> <Tag>Professional</Tag> <Tag>6 month</Tag>
        </div>
      </Card>
    </div>
  );
};

export default MediumInfoCard;
