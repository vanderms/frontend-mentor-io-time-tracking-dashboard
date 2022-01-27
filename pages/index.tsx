import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Activities from '../components/activities';
import Sidebar from '../components/sidebar';
import Activity from '../lib/activity';
import Timeframe from '../lib/timeframe';

export async function getStaticProps() {
  const data = await import('../public/data.json');
  const activities = data.data.map((item) => {
    const title: Timeframe = item.title as Timeframe;
    const { monthly, weekly, daily } = { ...item.timeframes };
    const activity: Activity = { title, monthly, weekly, daily };
    return activity;
  });

  return {
    props: { activities },
  };
}

interface Props {
  activities: Activity[];
}

const Home: NextPage<Props> = ({ activities }) => {
  const [timeframe, setTimeframe] = useState<Timeframe>('weekly');

  return (
    <>
      <Head>
        <meta name='description' content='Frontend Mentor | Time tracking dashboard' />
        <link rel='icon' type='image/png' sizes='32x32' href='./images/favicon-32x32.png' />
        <title>Frontend Mentor | Time tracking dashboard</title>
      </Head>
      <main>
        <Sidebar timeframe={timeframe} setTimeframe={setTimeframe} />
        <Activities timeframe={timeframe} activities={activities} />
      </main>
    </>
  );
};

export default Home;
