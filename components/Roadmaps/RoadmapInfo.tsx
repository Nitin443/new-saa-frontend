import styles from "../../styles/RoadmapInfo.module.scss";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { GrOverview } from "react-icons/gr";
import {
  MdAddTask,
  MdStackedLineChart,
  MdSchool,
  MdOutlineAttachMoney,
} from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { BsPersonFillCheck } from "react-icons/bs";

interface Props extends React.PropsWithChildren<any> {}

const RoadmapsInfo: React.FC<Props> = ({}) => {
  return (
    <div className={styles.riMainDiv}>
            <h2 >{`MCA (Computer Applications)`}</h2>
        <div className={styles.riSubDiv} >
          <div className={styles.riLeftDiv} >
              <div className={styles.textStyle}>
                <GrOverview className={styles.iconStyle} /> Overview
              </div>
              <div className={styles.textStyle}>
                <MdAddTask className={styles.iconStyle} /> Eligibility Criteria
              </div>
              <div className={styles.textStyle}>
                <MdStackedLineChart className={styles.iconStyle} />{" "}
                Opportunities
              </div>
              <div className={styles.textStyle}>
                <MdSchool className={styles.iconStyle} /> Top Colleges
              </div>
              <div className={styles.textStyle}>
                <TbBrandGoogleAnalytics className={styles.iconStyle} />{" "}
                Employement Rate
              </div>
              <div className={styles.textStyle}>
                <MdOutlineAttachMoney className={styles.iconStyle} /> Average
                Salary
              </div>
              <div className={styles.textStyle}>
                {" "}
                <BsPersonFillCheck className={styles.iconStyle} /> See Experts
              </div>
          </div>

          <div className={styles.riRightDiv} >
            
            <div className={styles.titleDiv} >
                <h3 className="title">Overview</h3>
                </div>

              <div className={styles.contentDiv} >
                Master of Computer Applications (MCA) is a three year post
                graduate course that deals in various aspects of computer
                applications. The programme aims to equip graduates with the
                advanced tools, technologies and applications in the IT industry
                to meet the constantly growing requirement of IT professionals.
                The industry-oriented programme helps learners to develop a
                thorough understanding of various tools and programming
                languages in the development of better and faster applications.
                It is more oriented towards the design of software and therefore
                puts more focus on the new programming language and technologies
                to enhance the skill set of learners. Given its scope, the
                programme will benefit aspirants seeking to develop skills,
                improve competency, and build expertise in the fast growing
                computing Industry.
              </div>
          </div>


        </div>
    </div>
  );
};

export default RoadmapsInfo;
