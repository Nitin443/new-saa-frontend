import { NextPage } from "next";
import Layout from "../../components/Layout/Layout";
import Roadmaps from "@/components/Roadmaps/Roadmaps";

const RoadmapsPage: NextPage = () => {
  return <Layout>
    <Roadmaps />
  </Layout>;
};

export default RoadmapsPage;