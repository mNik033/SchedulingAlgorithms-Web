import React, { useState, Dispatch, SetStateAction, useEffect, useRef } from 'react';
import styled from 'styled-components';
import AlgoSelect, { AlgoType } from './AlgoSelect';
import { media } from '../GlobalStyle.css';

const StyledInput = styled.div`
  padding: 1rem 2rem 2rem 2rem;
  ${media['600']`padding: 0.5rem 1.1rem 1.5rem 1.1rem;`}
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1),
    0px 2px 32px rgba(15, 91, 206, 0.1);
  border-radius: 15px;
  align-self: baseline;
  ${media['1050']`align-self: normal;`}
  min-width: 230px;
`;
const Form = styled.form`
  & > * + * {
    margin-top: 20px;
  }
  fieldset {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
    border: none;
  }
  label {
    display: inline-block;
    font-size: 14px;
    padding-bottom: 8px;
  }
  input {
    width: 100%;
    border: 1px solid #c5c7d0;
    border-radius: 5px;
    padding: 11px 12px;
    transition: all 0.2s ease-out;
    font-size: 14px;

    &:hover {
      background-color: #fafafa;
      border-color: rgb(179, 179, 179);
    }
    
    &:focus {
      border-color: #2684ff;
      background-color: #FFF;
      outline: none;
    }
    &:-webkit-autofill::first-line {
      font-family: $body-font;
      font-size: 14px;
    }
  }
  button {
    background-color: #2684ff;
    border-radius: 5px;
    color: #fff;
    width: 5.625rem;
    height: 2.5rem;
    transition: background-color 0.2s ease-out;
    position: relative;
    overflow: hidden;
    &:hover {
      background-color: #005bff;
    }
  }
  span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms ease-out;
    background-color: rgba(255, 255, 255, 0.7);
  }
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

const Button = ({ children }) => {
  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.pageX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.pageY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <button onClick={createRipple} type="submit">
      {children}
    </button>
  );
};

type InputProps = {
  selectedAlgo: {
    value: AlgoType;
    label: string;
  };
  setSelectedAlgo: Dispatch<SetStateAction<{}>>;
  setArrivalTime: Dispatch<SetStateAction<number[]>>;
  setBurstTime: Dispatch<SetStateAction<number[]>>;
  setTimeQuantum: Dispatch<SetStateAction<number>>;
};

const Input = (props: InputProps) => {
  const [arrivalTime, setArrivalTime] = useState('');
  const [burstTime, setBurstTime] = useState('');
  const [timeQuantum, setTimeQuantum] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const arrivalTimeArr = arrivalTime
      .trim()
      .split(/\s+/)
      .map((at) => parseInt(at));    
    const burstTimeArr = burstTime
      .trim()
      .split(/\s+/)
      .map((at) => parseInt(at));
    const timeQuantumInt = parseInt(timeQuantum);
    
    if (burstTimeArr.includes(0)) {
      alert('Invalid input: 0 burst time is invalid');
      return;
    } else if (arrivalTimeArr.length !== burstTimeArr.length) {
      alert(
        'Invalid input: number of the arrival times and burst times do not match'
      );
      return;
    } else if (
      arrivalTimeArr.includes(NaN) ||
      burstTimeArr.includes(NaN) ||
      (props.selectedAlgo.value === 'RR' && isNaN(timeQuantumInt))
    ) {
      alert('Invalid input: please enter only integers');
      return;
    } else if (
      arrivalTimeArr.some((t) => t < 0) ||
      burstTimeArr.some((t) => t < 0)
    ) {
      alert('Invalid input: negative numbers are invalid');
      return;
    }

    props.setArrivalTime(arrivalTimeArr);
    props.setBurstTime(burstTimeArr);
    props.setTimeQuantum(timeQuantumInt);
  };

  const handleArrivalTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrivalTime(e.target.value);
  };
  const handleBurstTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBurstTime(e.target.value);
  };
  const handleTimeQuantumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeQuantum(e.target.value);
  };

  return (
    <StyledInput>
      <h1>Input</h1>
      <Form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="react-select-algo">Algorithm</label>
          <AlgoSelect
            selectedAlgo={props.selectedAlgo}
            setSelectedAlgo={props.setSelectedAlgo}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="arrival-time">Arrival Time</label>
          <input
            onChange={handleArrivalTimeChange}
            type="text"
            id="arrival-time"
            placeholder="e.g. 0 2 4 6 8"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="burst-time">Burst Time</label>
          <input
            onChange={handleBurstTimeChange}
            type="text"
            id="burst-time"
            placeholder="e.g. 2 4 6 8 10"
          />
        </fieldset>
        {props.selectedAlgo.value === 'RR' && (
          <fieldset>
            <label htmlFor="time-quantum">Time Quantum</label>
            <input
              onChange={handleTimeQuantumChange}
              type="number"
              id="time-quantum"
              placeholder="e.g. 3"
              min="1"
              step="1"
            />
          </fieldset>
        )}
        <Button>Solve</Button>
      </Form>
    </StyledInput>
  );
};
export default Input;