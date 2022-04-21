import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { calculateOperation } from "../gameLogic/mathOperations";
import Returnicon from "../components/ReturnIcon";
import { useKey } from "../utils/utils";
import "./Level.css";

const Levels = () => {
  function newCalculation() {
    console.log("Started");
    const value = inputRef.current.value;
    if (value == currState.result) {
      console.log("TRUE");
    }

    setCurrState(calculateOperation(currLevel));

    inputRef.current.value = "";
    inputRef.current.focus();
  }

  const { currLevel } = useParams();
  const inputRef = useRef();
  const [currState, setCurrState] = useState(() =>
    calculateOperation(currLevel)
  );
  const [isStarted, setStart] = useState(false);
  const [currTime, setTime] = useState(60);

  useEffect(() => {
    let timer;
    if (isStarted) {
      timer = setTimeout(() => {
        setTime(() => currTime - 1);
      }, 1000);
    }
    if (currTime <= 0) {
      return clearTimeout(timer);
    }
  }, [currTime, isStarted]);
  const stateStart = {
    start: isStarted,
  };
  if (!stateStart.start) {
    stateStart.setStart = setStart;
  }
  useKey("Enter", () => newCalculation(), stateStart, stateStart.setStart);

  const started = {};
  const notStarted = {};

  if (!stateStart.start) {
    started.display = "none";
    notStarted.display = "block";
  }
  if (stateStart.start) {
    started.display = "block";
    notStarted.display = "none";
  }

  return (
    <div className="level--container">
      <div>
        <Returnicon goTo="/startGame" />
      </div>
      <div className="isStarted" style={notStarted}>
        Цъкни бутон за да започнеш игра
      </div>
      <div className="game" style={started}>
        <div className="game--display">
          <div className="time">{currTime}</div>
          <div className="displayMath">
            {currState.a} {currState.operationIcon} {currState.b}
          </div>
          <input type="number" ref={inputRef} placeholder="Въведи число" />
          <button onClick={newCalculation}>Изпрати</button>
        </div>
      </div>
    </div>
  );
};

export default Levels;
