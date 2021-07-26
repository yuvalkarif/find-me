import React, { useState, useEffect } from "react";
import { db } from "./../../firebase";
import { formatTime } from "../Timer/useTimer";
import { Content, Name, Number, Refresh, Table } from "./Leaderboard.styles";

const Leaderboard = () => {
  const [scores, setScores] = useState([]);
  const [topScores, setTopScores] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      getScores();
    } else {
      setTopScores(
        []
          .concat(scores)
          .sort((a, b) => a.time - b.time)
          .slice(0, 10)
      );
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
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      <div>Leaderboard</div>
      <Table>
        {topScores.map((score, i) => (
          <Content key={i}>
            <Name>
              <Number>{i + 1 + "."}</Number>
              <div>{score.name}</div>
            </Name>
            <div> {formatTime(score.time)}</div>
          </Content>
        ))}
      </Table>
      <Refresh onClick={() => refreshPage()}>CLICK TO RESTART</Refresh>
    </>
  );
};

export default Leaderboard;
