import TopBanner from "../HomeContent/TopBanner";

interface Props extends React.PropsWithChildren<any> {}

const Connect: React.FC<Props> = ({}) => {
  return (
    <>
      <TopBanner />
      <h1>Connect</h1>
    </>
  );
};

export default Connect;