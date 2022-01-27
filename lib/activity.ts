import Timeframe from './timeframe';

interface Activity {
  title: Timeframe;
  monthly: { current: number; previous: number };
  weekly: { current: number; previous: number };
  daily: { current: number; previous: number };
  [key: string]: Activity[keyof Activity];
}

export default Activity;
