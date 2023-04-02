interface Props extends React.PropsWithChildren<any> {}

const TopBanner: React.FC<Props> = ({}) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "gray",
          marginBottom: "50px",
          width: "100%",
          height: "50px",
        }}
      ></div>
    </>
  );
};

export default TopBanner;
