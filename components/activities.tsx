import { FC } from 'react';
import Activity from './../lib/activity';
import Card from './card';

interface Props {
  timeframe: string;
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
