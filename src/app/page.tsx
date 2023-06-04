
"use-client";


import { Suspense } from "react";
import CardSection from "./CardSection/CardSection";
// import styles from "./page.module.scss";

export default function Home() {

  return (
    <main>
      {  /* @ts-expect-error Async Server Component */}
      <CardSection />
    </main>
  );
}
