import React, { useState, useEffect, Fragment } from 'react';
import BarChart from "./BarChart";
import BarChartForm from "./BarChartForm"
import BarChartCodePreview from "./BarChartCodePreview"
import { parseDate, dateAccessor, temperatureAccessor, humidityAccessor, getData } from '../../ScatterPlot/App'
import * as d3 from "d3"
import { getScatterData, getTimelineData, getBarChartData2 } from '../../../../utils/parseData'
import { userEnteredData } from '../../ScatterPlot/EnteredData';

const sampleData = 
[
  {
    species: "Adelie",
    island: "Torgersen",
    culmen_length_mm: 39.2,
    culmen_depth_mm: 19.6,
    flipper_length_mm: 195,
    body_mass_g: 4675,
    sex: "MALE",
  },
  {
    species: "Gentoo",
    island: "Torgersen",
    culmen_length_mm: 34.1,
    culmen_depth_mm: 18.1,
    flipper_length_mm: 193,
    body_mass_g: 3475,
    sex: null,
  },
  {
    species: "Emperor",
    island: "Torgersen",
    culmen_length_mm: 42,
    culmen_depth_mm: 20.2,
    flipper_length_mm: 190,
    body_mass_g: 4250,
    sex: null,
  },
  {
    species: "fuck",
    island: "Torgersen",
    culmen_length_mm: 37.8,
    culmen_depth_mm: 17.1,
    flipper_length_mm: 186,
    body_mass_g: 3300,
    sex: null,
  },
  {
    species: "me",
    island: "Torgersen",
    culmen_length_mm: 37.8,
    culmen_depth_mm: 17.3,
    flipper_length_mm: 180,
    body_mass_g: 3700,
    sex: null,
  }
]
/*
This is the generic classful parent component that hosts the chart-specific form and graph 
We update state from the form, which the graph reads and re-renders from
<BarChartContainer>
    <BarChartForm />
    <BarChartCustomizer />
    <BarChartCodePreview />
</BarChartContainer>
*/
const BarChartContainer = (props) => {
  // const [data, setData] = useState(JSON.parse(JSON.stringify(userEnteredData)));
  const [data, setData] = useState(sampleData)
  const [xKey, setXKey] = useState('species');
  const [yKey, setYKey] = useState('body_mass_g');
  const [xAxisLabel, setXAxisLabel] = useState('X-axis: Species');
  const [yAxisLabel, setYAxisLabel] = useState('Y-axis: Body Mass');
  const [height, setHeight] = useState(500);
  const [width, setWidth] = useState(500);
  const [thresholds, setThresholds] = useState(9);
  const [barPadding, setBarPadding] = useState(2);

  useEffect(() => {
    setData(getBarChartData2(data, xKey, yKey));
    console.log('state data has been grouped and set in array of JS objs')
  }, []);

  // console.log('You just rerendered the BarChartContainer')

  // What format is data going to be input? Currently Javascript object[], or if JSON format, we have to JSON parse/stringify input before setting state
  const handleData = (e) => {
    e.preventDefault();
    setData((e.target.value));
    // setData(JSON.parse(JSON.stringify(e.target.value)));
  }

  const handleXKey = (e) => {
    e.preventDefault();
    console.log("resetting xKey")
    setXKey(e.target.value);
  }

  const handleYKey = (e) => {
    e.preventDefault();
    console.log("resetting ykey")
    setYKey(e.target.value);
  }

  const handleXAxisLabel = (e) => {
    e.preventDefault();
    setXAxisLabel(e.target.value);
  }

  const handleYAxisLabel = (e) => {
    e.preventDefault();
    setYAxisLabel(e.target.value);
  }

  const handleWidth = (e) => {
    e.preventDefault();
    setWidth(+e.target.value);
  }

  const handleHeight = (e) => {
    e.preventDefault();
    setHeight(+e.target.value);
  }

  const handleThresholds = (e) => {
    e.preventDefault();
    setThresholds(+e.target.value);
  }

  const handleBarPadding = (e) => {
    e.preventDefault();
    setBarPadding(+e.target.value);
  }

  const handlers = { handleData, handleXKey, handleYKey, handleXAxisLabel, handleYAxisLabel, handleWidth, handleHeight, handleThresholds, handleBarPadding };

    return (
      <div>
      <h1>This is the BarChartContainer. I serve the BarChart form, graph, and code preview.</h1>
      <div className="barchart-container" class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <BarChartForm data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} height={height} width={width} thresholds={thresholds} barPadding={barPadding}
          handlers={handlers}></BarChartForm>
          <BarChart data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} height={height} width={width} thresholds={thresholds} barPadding={barPadding}></BarChart>
          {/* <BarChartCodePreview /> */}
      </div>
      </div>
    );
  }

  export default BarChartContainer;







// class BarChartContainer extends Component {
//   constructor() {
//     super(props);
//     this.state = {
//       data: [],
//       xKey: 'xKey',
//       yKey: 'yKey',
//       xAxisLabel: 'xAxisLabel',
//       yAxisLabel: 'yAxisLabel',
//       height: '100',
//       width: '100'
//     }
// }
//     render() {
//             return (
//             <div className="barchartcontainer">
//                 <BarChartForm data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} height={height} width={width}></BarChartForm>
//                 <BarChart data={data} xKey={xKey} yKey={yKey} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel}></BarChart>
//             </div>
//             );
//         }
// }
