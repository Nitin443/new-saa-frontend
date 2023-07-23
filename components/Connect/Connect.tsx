import CardsSlidesWithTopic from "../Custom/CardsSlidesWithTopic";
import TopBanner from "../HomeContent/TopBanner";

interface Props extends React.PropsWithChildren<any> {}

const Connect: React.FC<Props> = ({}) => {
  return (
    <>
      <TopBanner
      title="Connect with top people's of their field accross the world" 
      description="You can connect with any professionals, students and can take advice for their studies, career and so more." 
      backgroundColor="#898121"
       />
      <CardsSlidesWithTopic />
      <CardsSlidesWithTopic />
    </>
  );
};

export default Connect;
