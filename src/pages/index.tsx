import Head from 'next/head';
import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Output from '../components/Output';

const Main = styled.main`
  display: flex;
  margin: 60px auto 1rem !important;
  gap: clamp(0.5rem, 2.5vw, 4rem);
`;

export default function Home() {
  const [arrivalTime, setArrivalTime] = useState<string[]>([]);
  const [burstTime, setBurstTime] = useState([]);

  return (
    <div>
      <Head>
        <title>Scheduling Algorithms</title>
        <meta
          name="description"
          content="Generate gantt chart and calculate TAT (turnaround time), WAT (waiting time) and finish time based on the algorithms."
        />
      </Head>

      <Main className="container">
        <Input setArrivalTime={setArrivalTime} setBurstTime={setBurstTime} />
        <Output arrivalTime={arrivalTime} burstTime={burstTime} />
      </Main>

      <footer className="container">
        <a
          href="https://github.com/mNik033/SchedulingAlgorithms-Web"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}