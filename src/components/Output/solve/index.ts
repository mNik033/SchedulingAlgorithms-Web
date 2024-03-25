import { fcfs } from './fcfs';
import { sjf } from './sjf';
import { srtf } from './srtf';
import { rr } from './rr';
import { npp } from './npp';
import { OptionType } from '../../Input/AlgoSelect';

export type ganttChartInfoType = {
  job: string;
  start: number;
  stop: number;
}[];

export const solve = (
  selectedAlgo: OptionType["value"],
  arrivalTime: number[],
  burstTime: number[],
  timeQuantum: number,
  priorities: number[]
) => {
  switch (selectedAlgo) {
    case 'FCFS':
      return fcfs(arrivalTime, burstTime);
    case 'SJF':
      return sjf(arrivalTime, burstTime);
    case 'SRTF':
      return srtf(arrivalTime, burstTime);
    case 'RR':
      return rr(arrivalTime, burstTime, timeQuantum);
    case 'NPP':
      return npp(arrivalTime, burstTime, priorities);
    default:
      break;
  }
};