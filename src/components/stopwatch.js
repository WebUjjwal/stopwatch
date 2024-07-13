"use client";
import { useState, useRef } from "react";
import styles from "@/styles/style.module.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startPauseTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
    } else {
      const startTime = Date.now() - time;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 100);
    }
    setIsRunning(!isRunning);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const milliseconds = `0${Math.floor((time % 1000) / 10)}`.slice(-2);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / (1000 * 60)) % 60)}`.slice(-2);
    const hours = `0${Math.floor((time / (1000 * 60 * 60)) % 24)}`.slice(-2);
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.stopwatchCard}>
        <div className={styles.time}>{formatTime(time)}</div>
        <div className={styles.buttons}>
          <button onClick={startPauseTimer}>{isRunning ? "❚❚" : "▶"}</button>
          <button onClick={stopTimer}>◼</button>
          <button onClick={resetTimer}>↻</button>
        </div>
      </div>
    </div>
  );
};

// const styles = {
//   //   container: {
//   //     display: "flex",
//   //     flexDirection: "column",
//   //     alignItems: "center",
//   //     justifyContent: "center",
//   //     height: "100vh",
//   //     fontFamily: "Arial, sans-serif",
//   //   },
//   time: {
//     fontSize: "48px",
//     marginBottom: "20px",
//   },
//   buttons: {
//     //
//   },
// };

export default Stopwatch;
