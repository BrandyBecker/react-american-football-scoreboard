//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  //------------------------------------------------------------------------------------------------------------------------------------

  const [homeScore, setHomeScore] = useState(0);
  console.log(useState(0));

  const [awayScore, setAwayScore] = useState(0);
  console.log(useState(0));

  const [quarter, setQuarter] = useState(1);
  console.log(useState(0));

  const quarterSet = () => {
    setQuarter(quarter < 4 ? quarter + 1 : quarter - 3);
    {
      /* is quarter lessthan 4? if so, add 1 to quarter. if not, sub 3 to quarter . after 4, resets to 1*/
    }
  };

  const [ballOn, setBallOn] = useState(0);
  console.log(useState(0));

  const ballOnSet = () => {
    setBallOn(ballOn < 50 ? ballOn + 1 : 0);
    {
      /* is ballOn less than 50? if so, add 1 to ballOn. if not, sub 49 to ballon. after 50, reset to 1 */
    }
  };

  //------------------------------------------------------------------------------------------------------------------------------------

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name borderOnText">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name borderOnText">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        {/*-----------------------------------------------------------------------------------------------------------------------------------*/}
        <BottomRow quarter={quarter} ballOn={ballOn} />
        {/*  assigning var the state of quarter and passing it to BottomRow.  */}
        {/*-----------------------------------------------------------------------------------------------------------------------------------*/}
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            className="homeButtons__touchdown"
            onClick={() => setHomeScore(homeScore + 7)}
          >
            Home Touchdown : +7
          </button>

          <button
            className="homeButtons__fieldGoal"
            onClick={() => setHomeScore(homeScore + 3)}
          >
            Home Field Goal : +3
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => setAwayScore(awayScore + 7)}
          >
            Away Touchdown : +7
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => setAwayScore(awayScore + 3)}
          >
            Away Field Goal : +3
          </button>
        </div>
        <div className="bottomRowButtons">
          <button className="ballOnButton" onClick={ballOnSet}>
            Add Ball On : +1
          </button>
          <button className="quarterButton" onClick={quarterSet}>
            Add Quarter : +1
          </button>
          <button
            className="ballOnButton"
            onClick={() =>
              ballOn < 50 ? setBallOn(ballOn + 10) : setBallOn(0)
            }
          >
            Add Ball On : +10
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
