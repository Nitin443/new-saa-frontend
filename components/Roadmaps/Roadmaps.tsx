import CardsSlidesWithTopic from "../Custom/CardsSlidesWithTopic";
import TopBanner from "../HomeContent/TopBanner";

interface Props extends React.PropsWithChildren<any> {}

const Roadmaps: React.FC<Props> = ({}) => {
  return (
    <>
      <TopBanner 
      title="Explort thousand's of careers and studies roadmaps." 
      description="You can find and check all roadmaps and then you can take effective decision for your future." 
      backgroundColor="#3C4048"
      />
      <CardsSlidesWithTopic />
      <CardsSlidesWithTopic />
    </>
  );
};

export default Roadmaps;