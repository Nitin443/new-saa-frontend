import CardsSlidesWithTopic from "../Custom/CardsSlidesWithTopic";
import TopBanner from "../HomeContent/TopBanner";

interface Props extends React.PropsWithChildren<any> {}

const EventsCom: React.FC<Props> = ({}) => {
  return (
    <>
      <TopBanner />
      <CardsSlidesWithTopic />
      <CardsSlidesWithTopic />
    </>
  );
};

export default EventsCom;