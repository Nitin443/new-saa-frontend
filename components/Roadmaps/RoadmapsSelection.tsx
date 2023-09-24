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
        <div>
          <label className={styles.rsLabel} >Select Course, Field type</label>

          <Select
           className={styles.rsSelectDiv}
            defaultValue="lucy"
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </div>

        <div>
          <label className={styles.rsLabel} >Select Course branch, Field speciliazation</label>

          <Select
           className={styles.rsSelectDiv}
            defaultValue="lucy"
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
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
