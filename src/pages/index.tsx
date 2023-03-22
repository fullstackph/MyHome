import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { Featured } from "@/components/Featured";
import Banner from '../components/Banner'
import CardInfo from "@/components/CardInfo";

const inter = Inter({ subsets: ["latin"] });




export default function Home() {
  return (
    <>
      <Layout title="My Home">
        <Banner />
        <CardInfo />
        <Featured />
      </Layout>
    </>
  );
}
