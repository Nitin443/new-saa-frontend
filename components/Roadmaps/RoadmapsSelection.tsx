import styles from "../../styles/RoadmapsView.module.scss";

interface Props extends React.PropsWithChildren<any> {}

const RoadmapsSelection: React.FC<Props> = ({}) => {
  return (
    <div className={styles.rsMainDiv}>

    <div className={styles.rsTopMainDiv} >

      <h1 className={styles.rsH1Tag} >Search career roadmaps by course types, field types and etc</h1>

      <p className={styles.rsPtag} >
        You can search career raodmaps by selecting course name or field type
        then you can click on go button to see all opportunities of that
        particular course and field. you can decide your career decision.
      </p>

      </div>

    </div>
  );
};

export default RoadmapsSelection;
