import styles from "../../styles/TopBanner.module.scss";
import { Image } from "antd";
import SaaButton from "../Custom/SaaButton";

interface Props extends React.PropsWithChildren<any> {
  title?: string;
  description?: string;
  showBtn?: boolean;
  backgroundColor?: string;
  imageUrl?: string;
}

const TopBanner: React.FC<Props> = ({
  title,
  description,
  showBtn,
  backgroundColor,
  imageUrl,
}) => {
  return (
    <div
      style={{ backgroundColor: `${backgroundColor}` }}
      className={styles.mainDiv}
    >
      <div className={styles.leftDiv}>
        <h1 className={styles.h1Tag}>
          {title ||
            "Build yourself with Top Mentors and Live in progressive Environment"}
        </h1>

        <p className={styles.pTag}>
          {description ||
            `Don't worry about Tier's of Colleges. Now you can live & grow with top
          People's.`}
        </p>

        {showBtn ? (
          <div className={styles.btnDiv}>
            <SaaButton className={styles.btn}>Join us </SaaButton>

            <SaaButton className={styles.btnStyle}>Explore more </SaaButton>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className={styles.rightDiv}>
        <Image
          width={500}
          height={500}
          preview={false}
          alt="banner image"
          src={
            imageUrl ||
            "https://tpsowsaa.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner-img.733357c6.png&w=640&q=75"
          }
        />
      </div>
    </div>
  );
};

export default TopBanner;
