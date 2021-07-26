import React, { useState, useEffect } from "react";
import useTimer from "./useTimer";
import { formatTime } from "./useTimer";
export let time = 0;
const Timer = ({ isCorrect }) => {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);
  const [isSearching, setIsSearching] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      handleStart();
    }
    if (isCorrect.pointer1 && isCorrect.pointer2) {
      handlePause();
      time = timer;
    }
  }, [firstLoad, isCorrect]);
  return (
    <div className="Timer">
      <h3>{formatTime(timer)}</h3>
      <div className="Timer-card"></div>
    </div>
  );
};

export default Timer;
