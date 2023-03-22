import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { Featured } from "@/components/Featured";
import Banner from "../components/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout title="My Home">
        <Banner />
        <Featured />
      </Layout>
    </>
  );
}
