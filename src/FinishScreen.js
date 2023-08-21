import React from "react";

const FinishScreen = ({ points, maxPossiblePoints, highscore }) => {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        {Math.ceil(percentage)}
      </p>
      <p className="highscore">(Highscore: {highscore} x points)</p>
    </>
  );
};

export default FinishScreen;