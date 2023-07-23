import { NextPage } from "next";
import Layout from "../../components/Layout/Layout";
import EventsCom from "../../components/Events/Events";

const EventsPage: NextPage = () => {
  return <Layout>
    <EventsCom />
  </Layout>;
};

export default EventsPage;