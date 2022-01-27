/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Timeframe from './../lib/timeframe';
import getPath from './../lib/path';

interface Props {
  timeframe: Timeframe;
  setTimeframe: (value: Timeframe) => void;
}

const Sidebar: FC<Props> = ({ timeframe, setTimeframe }) => {
  return (
    <section className='root-sidebar'>
      <header className='user'>
        <div className='avatar-container'>
          <img className='avatar' src={getPath('/images/image-jeremy.png')} alt='user avatar' />
        </div>
        <div className='title-container'>
          <div className='subtitle'>Report for</div>
          <h1 className='title'>Jeremy Robson</h1>
        </div>        
      </header>
      <div className='timeframes'>
        <button
          className={timeframe === 'daily' ? 'active' : undefined}
          onClick={() => setTimeframe('daily')}
        >
          Daily
        </button>
        <button
          className={timeframe === 'weekly' ? 'active' : undefined}
          onClick={() => setTimeframe('weekly')}
        >
          Weekly
        </button>
        <button
          className={timeframe === 'monthly' ? 'active' : undefined}
          onClick={() => setTimeframe('monthly')}
        >
          Monthly
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
