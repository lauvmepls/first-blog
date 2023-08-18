import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <p><b>Hello! I am Jhon Denielle Sunga, a 3rd year BS in Computer Engineering college student at the University of the Assumption.</b></p>
        <p>I love playing video games like League of Legends, Dota 2, and Valorant.</p>
        <p>I love listening to rap music, with the likes of Kanye West, Kendrick Lamar, Travis Scott, etc. </p>
        <p>I enjoy different kinds of food, but you'll never make me eat an Okra.</p>
        <p>I took Computer Engineering as my program because it lines up with my values and things I love doing, and it is also in demand hehe.</p>
        <p>Hopefully after I graduate in my program, I can find a job that lines up with it and eventually make enough money to make a business and have a steady cash flow so I can be financially stable.</p>
        
      </section>
    </Layout>
  );
}