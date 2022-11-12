import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import RightPanel from "../components/RightPanel";

export default function Home() {
  return (
    <div className="bg-[#130f19] text-white min-h-screen flex flex-col md:flex-row">
      <Hero />
      <RightPanel />
    </div>
  );
}
