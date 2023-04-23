import HomeEventsBanner from "./HomeEventsBanner";
import TopBanner from "./TopBanner";

interface Props extends React.PropsWithChildren<any> {}

const Homes: React.FC<Props> = ({}) => {
  return (
    <>
      <TopBanner />
      <HomeEventsBanner />
    </>
  );
};

export default Homes;
