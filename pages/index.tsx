import { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import Homes from "@/components/HomeContent/Homes";

const Home: NextPage = () => {
  return <Layout>
    <Homes />
  </Layout>;
};

export default Home;
