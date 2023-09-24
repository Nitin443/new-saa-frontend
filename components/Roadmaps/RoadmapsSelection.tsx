import { Button, Select } from "antd";
import styles from "../../styles/RoadmapsSelection.module.scss";

interface Props extends React.PropsWithChildren<any> {}

const RoadmapsSelection: React.FC<Props> = ({}) => {
  return (
    <div className={styles.rsMainDiv}>
      <div className={styles.rsTopMainDiv}>
        <h1 className={styles.rsH1Tag}>
          Search career roadmaps by course types, field types and etc
        </h1>

        <p className={styles.rsPtag}>
          You can search career raodmaps by selecting course name or field type
          then you can click on go button to see all opportunities of that
          particular course and field. you can decide your career decision.
        </p>
      </div>

      <div className={styles.rsSelectionDiv}>
        <div className={styles.rsSelectMainDiv} >
          <label className={styles.rsLabel} >Select Course, Field type</label>

          <Select
           className={styles.rsSelectDiv}
            defaultValue="MCA"
            options={[
              { value: "MCA", label: "MCA" },
              { value: "MBA", label: "MBA" },
              { value: "B.Tech", label: "B.Tech" },
              { value: "BCA", label: "BCA" },
              { value: "IT", label: "Information Technology", },
              { value: "Astronaut", label: "Astronaut", },
              { value: "BC", label: "Business Consultant", },
            ]}
          />
        </div>

        <div className={styles.rsSelectMainDiv} >
          <label className={styles.rsLabel} >Select Course branch, Field speciliazation</label>

          <Select
           className={styles.rsSelectDiv}
            defaultValue="Computer Application"
            options={[
              { value: "Computer Application", label: "Computer Application" },
            ]}
          />
        </div>

        <div className={styles.rsBtnDiv} >

         <Button type="primary" >Go</Button>

        </div>

      </div>
    </div>
  );
};

export default RoadmapsSelection;
