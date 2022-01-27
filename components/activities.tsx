import { FC } from 'react';
import Activity from './../lib/activity';
import Timeframe from '../lib/timeframe';
import Card from './card';

interface Props {
  timeframe: Timeframe;
  activities: Activity[];
}

const Activities: FC<Props> = ({ timeframe, activities }) => {
  return (
    <ul className='root-activities'>
      {activities.map((activity: Activity) => {
        return (
          <li key={activity.title}>
            <Card activity={activity} timeframe={timeframe}></Card>
          </li>
        );
      })}
    </ul>
  );
};

export default Activities;
