import TopBanner from "../HomeContent/TopBanner";

interface Props extends React.PropsWithChildren<any> {}

const Roadmaps: React.FC<Props> = ({}) => {
  return (
    <>
      <TopBanner />
      <h1>Roadmaps</h1>
    </>
  );
};

export default Roadmaps;