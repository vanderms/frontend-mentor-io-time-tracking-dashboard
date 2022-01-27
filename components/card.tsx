import { FC } from 'react';
import Activity from '../lib/activity';
import Timeframe from '../lib/timeframe';

interface Props {
  timeframe: Timeframe;
  activity: Activity;
}

const getClasses = (title: string): string => {
  return 'root-card ' + title.trim().replace(' ', '-').toLowerCase();
};

const getPreviousText = (timeframe: Timeframe): string => {
  return {
    'daily': 'Last Day',
    'weekly': 'Last Week',
    'monthly': "Last Month"
  }[timeframe];
};

const Card: FC<Props> = ({ timeframe, activity }) => {

  const current: number = activity[timeframe].current;
  const previous: number = activity[timeframe].previous;

  return (
    <article className={getClasses(activity.title)}>
      <div className='content'>
        <div className='first-row'>
          <header>
            <h2>{activity.title}</h2>
          </header>
          <button className='ellipsis' aria-label='further details'>
            <svg width='21' height='5' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z'
                fill='#BBC0FF'
                fillRule='evenodd'
              />
            </svg>
          </button>
        </div>
        <div className='data'>
          <div className='current'>{current} {current > 1 ? 'hrs' : 'hr'}</div>
          <div className='previous'>
            {getPreviousText(timeframe)} - {previous} {previous > 1 ? 'hrs' : 'hr'}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
