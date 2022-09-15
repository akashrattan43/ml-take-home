import "./App.css";
import badimg from "./bad-data";
import goodimg from "./good-data";
import { useState } from "react";
import BadComponent from "./components/BadComponent";
import GoodComponent from "./components/GoodComponent";
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const data = [
  {img: 1, number: 3},
  {img: 2, number: 3},
  {img: 3, number: 6},
];

function App() {
  const [bad, setbad] = useState(badimg);
  const [good, setgood] = useState(goodimg);

  return (
    <div style={{ margin: 30 }}>
      <p>Total number of Images : {bad.length + good.length} </p>

      <div className="badcomp">
        <p>Total number of Bad Images {bad.length}</p>
        <BadComponent bad={bad} />
      </div>

      <div className="goodcomp">
        <p>Total number of good Images {good.length}</p>
        <GoodComponent good={good} />
      </div>
      <div className="graph">
      <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={20}
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickFormat={["Bad Images", "Good Images", "Total Images"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`${x}`)}
        />
        <VictoryBar
          data={data}
          x="img"
          y="number"
        />
      </VictoryChart>
      </div>
    </div>
  );
}

export default App;
