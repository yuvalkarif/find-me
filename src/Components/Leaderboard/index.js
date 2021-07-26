import React, { useState, useEffect } from "react";
import { db } from "./../../firebase";
import { formatTime } from "../Timer/useTimer";

const Leaderboard = () => {
  const [scores, setScores] = useState([]);
  const [topScores, setTopScores] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      getScores();
    } else {
      setTopScores([].concat(scores).sort((a, b) => a.time - b.time));
    }
  }, [firstLoad, scores]);

  async function getScores() {
    await db
      .collection("scores")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setScores((scoresArray) => [...scoresArray, doc.data()]);
          console.log(doc.data());
        });
      });
  }

  return (
    <div>
      {topScores.map((score) => (
        <div key={scores.indexOf(score)}>
          {score.name}
          {formatTime(score.time)}
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
