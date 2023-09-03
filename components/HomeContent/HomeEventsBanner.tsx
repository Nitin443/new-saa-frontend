import styles from "../../styles/HomeEventsBanner.module.scss";
import { Button, Image } from "antd";
import eventImage from "../../assets/images/event.png"
import SaaButton from "../Custom/SaaButton";

interface Props extends React.PropsWithChildren<any> {}

const HomeEventsBanner: React.FC<Props> = ({}) => {
  return (
    <div className={styles.mainDiv}>

      <div className={styles.rightDiv}>
        <Image
        width={400}
        height={400}
          preview={false}
          alt="banner image"
          src="https://t4.ftcdn.net/jpg/02/16/94/65/360_F_216946587_rmug8FCNgpDCPQlstiCJ0CAXJ2sqPRU7.jpg"
        />
      </div>

      <div className={styles.leftDiv}>
        <h1 className={styles.h1Tag}>
          Join Events accross the world and get knowledge of different areas
        </h1>

        <p className={styles.pTag}>
          You can join events from anywhere and can enjoy knowledge and informations of events from top mentores and universities.
        </p>

        <div className={styles.btnDiv}>
        <SaaButton style={{backgroundColor: '#595959'}}>Join Events </SaaButton>

          
        </div>
      </div>
    </div>
  );
};

export default HomeEventsBanner;
