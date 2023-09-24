import styles from "../../styles/RoadmapsView.module.scss";
import RoadmapsInfo from "./RoadmapInfo";
import RoadmapsSelection from "./RoadmapsSelection";

interface Props extends React.PropsWithChildren<any> {}

const RoadmapsView: React.FC<Props> = ({}) => {
  return (
    < >
      <RoadmapsSelection />

      <RoadmapsInfo />
    </>
  );
};

export default RoadmapsView;
