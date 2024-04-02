# CPU Scheduling Algorithms

> This project is a CPU scheduling algorithm simulator that takes arrival times, burst times, (and optionally priorities for priority scheduling, or time quantum for round robin scheduling) as input and provides output including Gantt chart visualization and a table showing finish time, turnaround time, and waiting time for each process. 

![Landing page](src/assets/screenshots/fcfs.png?raw=true)

## Getting started

Either visit the website [https://scheduling-algorithms-web.vercel.app](https://scheduling-algorithms-web.vercel.app) which has already been deployed on Vercel, or, to run locally, follow the steps given below:

First, in the working directory:

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Input

The input format consists of providing arrival times, burst times, and optionally priorities (for Priority Scheduling Algorithm) or time quantum (for Round Robin Scheduling algorithm) for each process.

## Output

The output includes:

- Gantt chart visualization showing the timeline of process execution.
- A table displaying finish time, turnaround time, and waiting time for each process.

## Supported Algorithms

The simulator supports the following CPU scheduling algorithms:

- First Come First Serve / FCFS
- Shortest Job First / SJF
- Shortest Remaining Time First / SRTF
- Round Robin / RR
- Priority (non-preemptive)
- Priority (preemptive)

### First Come First Serve / FCFS

FCFS is a non-preemptive scheduling algorithm where processes are executed based on their arrival time in the ready queue. The first process to arrive gets served first, regardless of its CPU burst time. This approach is simple to implement but can lead to starvation for short processes if longer ones arrive earlier.

![FCFS](src/assets/screenshots/fcfs.png?raw=true)

### Shortest Job First / SJF

SJF, also known as Shortest-Job-Next (SJN), is a non-preemptive algorithm that prioritizes processes with the shortest CPU burst time. This strategy minimizes average waiting time but requires knowledge of the burst time upfront, which might not be feasible in all scenarios.

![SJF](src/assets/screenshots/sjf.png?raw=true)

### Shortest Remaining Time First / SRTF

SRTF is a preemptive scheduling algorithm that continuously assigns the CPU to the process with the shortest remaining burst time. This approach ensures fast turnaround times but introduces context switching overhead due to preemption.

![SRTF](src/assets/screenshots/srtf.png?raw=true)

### Round Robin / RR

RR is a preemptive algorithm that employs a time quantum (a fixed time slice). Processes are allocated the CPU in a round-robin fashion, meaning each process gets a chance to run for the defined quantum. If a process doesn't finish within the quantum, it's preempted and placed back in the queue. RR promotes fairness and responsiveness for interactive systems but can lead to longer waiting times for longer processes.

![RR](src/assets/screenshots/rr.png?raw=true)

### Priority (non-preemptive)

Priority scheduling assigns priorities to each process. The process with the highest priority gets executed first, regardless of arrival time or burst time. This approach is useful for prioritizing critical tasks but can lead to starvation for lower-priority processes.

![NPP](src/assets/screenshots/npp.png?raw=true)

### Priority (preemptive)

Similar to non-preemptive priority, here processes have assigned priorities. However, in this preemptive version, a running high-priority process can be interrupted by an even higher-priority process arriving later. This guarantees immediate execution of critical tasks but can cause frequent context switching overhead.

![PP](src/assets/screenshots/pp.png?raw=true)

## Contributors

[Medapati Manasa](https://github.com/medapatimanasa)    
[Nikhil Kumar](https://github.com/mNik033)  
[Nishant](https://github.com/nishantlamba29)    
[Obbareddy Leela Sai](https://github.com/Leelasai2004)  
[Rakesh Kumar](https://github.com/Rakesh-47)  