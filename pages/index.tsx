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

        {/* <!-- Site Name, Title, and Description to be displayed --> */}
        <meta property='og:site_name' content='Frontend Mentor | Time tracking dashboard ' />
        <meta property='og:title' content='Time tracking dashboard' />
        <meta
          property='og:description'
          content='My solution to the challenge Time Tracking dashboard, by Frontend Mentor'
        />

        {/* <!-- Image to display -->  */}
        {/* <!-- Replace   «example.com/image01.jpg» with your own -->  */}
        <meta
          property='og:image'
          content='https://vanderms.github.io/frontend-mentor-io-time-tracking-dashboard/design/desktop-design.jpg'
        />

        {/* <!-- No need to change anything here -->  */}
        <meta property='og:type' content='website' />
        <meta property='og:image:type' content='image/jpeg' />

        {/* <!-- Website to visit when clicked in fb or WhatsApp-->  */}
        <meta
          property='og:url'
          content='https://vanderms.github.io/frontend-mentor-io-time-tracking-dashboard/'
        ></meta>
      </Head>
      <main>
        <Sidebar timeframe={timeframe} setTimeframe={setTimeframe} />
        <Activities timeframe={timeframe} activities={activities} />
      </main>
    </>
  );
};

export default Home;
