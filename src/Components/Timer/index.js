import React, { useState, useEffect } from "react";
import useTimer from "./useTimer";

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
  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return ` ${getMinutes} : ${getSeconds}`;
  };
  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      handleStart();
    }
    if (isCorrect.pointer1 && isCorrect.pointer2) {
      handlePause();
    }
  }, [firstLoad, isCorrect]);
  return (
    <div className="Timer">
      <h3>{formatTime()}</h3>
      <div className="Timer-card"></div>
    </div>
  );
};

export default Timer;
