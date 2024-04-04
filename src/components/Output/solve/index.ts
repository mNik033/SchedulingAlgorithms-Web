import { fcfs } from './fcfs';
import { sjf } from './sjf';
import { srtf } from './srtf';
import { rr } from './rr';
import { npp } from './npp';
import { pp } from './pp';
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
  jobIds: string[],
  timeQuantum: number,
  priorities: number[]
) => {
  switch (selectedAlgo) {
    case 'FCFS':
      return fcfs(arrivalTime, burstTime, jobIds);
    case 'SJF':
      return sjf(arrivalTime, burstTime, jobIds);
    case 'SRTF':
      return srtf(arrivalTime, burstTime, jobIds);
    case 'RR':
      return rr(arrivalTime, burstTime, timeQuantum, jobIds);
    case 'NPP':
      return npp(arrivalTime, burstTime, priorities, jobIds);
    case 'PP':
      return pp(arrivalTime, burstTime, priorities, jobIds);
    default:
      break;
  }
};