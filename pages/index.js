import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Dashboarduser from "./dashboarduser"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head></Head>
      <Dashboarduser />
    </div>
  );
}
