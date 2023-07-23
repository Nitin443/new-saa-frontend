import HomeConnectBanner from "./HomeConnectBanner";
import HomeEventsBanner from "./HomeEventsBanner";
import HomeRoadmapsBanner from "./HomeRoadmapsBanner";
import TopBanner from "./TopBanner";

interface Props extends React.PropsWithChildren<any> {}

const Homes: React.FC<Props> = ({}) => {
  return (
    <>
      <TopBanner showBtn={true} />
      <HomeEventsBanner />
      <HomeConnectBanner />
      <HomeRoadmapsBanner />
    </>
  );
};

export default Homes;
