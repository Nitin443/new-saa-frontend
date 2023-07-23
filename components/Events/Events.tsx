import MediumInfoCard from "../Cards/MediumInfoCard";
import TopBanner from "../HomeContent/TopBanner";

interface Props extends React.PropsWithChildren<any> {}

const EventsCom: React.FC<Props> = ({}) => {
  return (
    <>
      <TopBanner />
      <h1>Events</h1>
      <MediumInfoCard />
      
    </>
  );
};

export default EventsCom;