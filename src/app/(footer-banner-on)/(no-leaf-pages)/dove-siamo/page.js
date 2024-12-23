"use client";
import dynamic from "next/dynamic";

const Map1 = dynamic(() => import("../../../components/Maps/Map1"), {
  ssr: false,
});
const Map2 = dynamic(() => import("../../../components/Maps/Map2"), {
  ssr: false,
});
import Head from "next/head";
import styles from "./page.module.css";
// import Map1 from "@/app/components/Maps";

export default function page() {
  return (
    <div>
      <h1>dove siamo</h1>
      <div style={{ height: "326px" }}>
        <Map1 />
      </div>
      <div style={{ height: "326px" }}>
        <Map2 />
      </div>
    </div>
  );
}
