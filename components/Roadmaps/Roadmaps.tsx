import CardsSlidesWithTopic from "../Custom/CardsSlidesWithTopic";
import TopBanner from "../HomeContent/TopBanner";
import RoadmapsView from "./RoadmapsView";

interface Props extends React.PropsWithChildren<any> {}

const Roadmaps: React.FC<Props> = ({}) => {
  return (
    <>
      <TopBanner 
      title="Explore thousand's of careers and studies roadmaps." 
      description="You can find and check all roadmaps and then you can take effective decision for your future." 
      backgroundColor="#3C4048"
      />

      <RoadmapsView />
   
    </>
  );
};

export default Roadmaps;