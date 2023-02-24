import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-react-charts";
import "hammerjs";

const BarChartCA = () => {

const [firstSeries, secondSeries] = [
  [1, 2, 3, 5],
  [-1, -2, -3, -5],
];
const ChartContainer = () => (
  <Chart>
    <ChartSeries>
      <ChartSeriesItem type="column" data={firstSeries} />
      <ChartSeriesItem type="column" data={secondSeries} />
    </ChartSeries>
  </Chart>
);

}

export default BarChartCA