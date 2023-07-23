import CardsSlidesWithTopic from "../Custom/CardsSlidesWithTopic";
import TopBanner from "../HomeContent/TopBanner";

interface Props extends React.PropsWithChildren<any> {}

const EventsCom: React.FC<Props> = ({}) => {
  return (
    <>
      <TopBanner title="Join the events accross the world from anywhere" 
      description="You can join the events of technology, reasearch, marketing and more. We want to provide realistic experience of learning." 
      backgroundColor="#54B435"
      />
      <CardsSlidesWithTopic />
      <CardsSlidesWithTopic />
    </>
  );
};

export default EventsCom;