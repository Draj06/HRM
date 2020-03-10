import React, { Component } from 'react'
import { Chart } from "react-google-charts";

export default class dashboard extends Component {
    render() {
        const data = [
            ["Element", "Density"],
            ["Copper", 8.94], // RGB value
            ["Silver", 10.49], // English color name
            ["Gold", 19.3],
            ["Platinum", 21.45] // CSS-style declaration
          ];
        return (
            <div className="App col-lg-6">
            <Chart
              chartType="ColumnChart"
              width="100%"
              height="400px"
              data={data}
            />
          </div>
        )
    }
}
