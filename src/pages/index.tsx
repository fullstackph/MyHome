import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { Featured } from "@/components/Featured";
import Banner from '../components/Banner1'
import CardInfo from "@/components/CardInfo";
import Categories from "@/components/Categories";
import What_people_say from "@/components/What_people_say";
import Our_agents from "@/components/Our_agents";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout title="My Home">
        <Banner />
        <CardInfo />
        <Featured />
        <Categories />
        <What_people_say />
        <Our_agents />
      </Layout>
    </>
  );
}
