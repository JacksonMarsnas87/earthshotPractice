import "../ProblemProfileCountry.css";
import ProgressBar from "./ProgressBar";
import Collapsible from 'react-collapsible';
import renderCustomizedLabel from "../chartHelpers/PieChartLabelGenerator";
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Label, BarChart, Bar, LineChart, Line, Legend, PieChart, Pie, Cell } from "recharts";
import { BsChevronDown } from "react-icons/bs";
import TestData from "../testdata/TestData";
import TestDataLine from "../testdata/TestDataLineGraph";
import { useState, useEffect } from "react";

function ProblemProfileCountry({ header, data, graphData, progressBarLabels }) {

  const [width, setWidth] = useState(window.innerWidth);
  const [firstGraphData, setFirstGraphData] = useState(graphData[data.graphDataNumber][0])
  const [secondGraphData, setSecondGraphData] = useState(graphData[data.graphDataNumber][1])
  const tinyScreenWidth = 600;
  
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    setFirstGraphData(graphData[data.graphDataNumber][0])
    setSecondGraphData(graphData[data.graphDataNumber][1])
  }, [])

  const getGraphType = (graphData) => {
    switch(graphData.type) {
      case "bar":
        return <BarChart data={graphData.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis stroke="white">
                  <Label value={graphData.yAxisLabel} position="insideLeft" angle={270} dy={70} fill="white" />
                </YAxis>
                <Legend />

                {
                  graphData.labels.map((label) => (
                    <Bar dataKey={label.name} fill={label.colour} />
                  ))
                }
              </BarChart>
      case "line":
        return <LineChart data={graphData.data}>
                <CartesianGrid strokeDasharray={"3 3"} />
                <XAxis dataKey="key" stroke="white" height={50}>
                  <Label value={graphData.xAxisLabel} position="insideBottom" fill="white" />
                </XAxis>
                <YAxis stroke="white">
                  <Label value={graphData.yAxisLabel} position="insideLeft" angle={270} dy={60} fill="white" />
                </YAxis>

                {
                  graphData.labels.map((label) => (
                    <Line type="monotone" dataKey={label.name} stroke={label.colour} />
                  ))
                }
              </LineChart>
      case "pie":
        return (
          <PieChart>
            <Pie data={graphData.data} dataKey="value" cx="50%" cy="50%" outerRadius={90} fill="#ff0000" labelLine={false} label={renderCustomizedLabel}>
            
              {
                graphData.data.map((label, index) => {
                  return <Cell fill={graphData.labels[index].colour} />
                })
              }
            </Pie>

            <Legend />
          </PieChart>
        )
    }
  }

    return (
        <div className={width <= tinyScreenWidth ? "TinyCard" : "Card"}>
          <div className="HeaderSection">
            <p className="Header">{header}</p>
            <h1 className="Title">{data.title}</h1>
            <p className="Summary">{data.summary}</p>

            <ResponsiveContainer width="99%" height={200} style={{marginTop: "20px", marginBottom: "20px", display: "flex", flexDirection: "column"}}>
              <p style={{fontSize: "1.1rem", marginLeft: "auto", marginRight: "auto", marginBottom: "10px"}}>{firstGraphData.title}</p>
              {getGraphType(firstGraphData)}
            </ResponsiveContainer>
          </div>
          
          {/* May want to put each Collapsible into its own component. That would help tidy up this part of the code, but also introduce more components that are really simple */}
          <Collapsible classParentString="DarkTab" tabIndex={0} trigger={[<p className="Trigger">Potential Causes</p>, <BsChevronDown />]}>
            <p className="DropdownText">{data.causes.headline}</p>

            <ul>
              {
                data.causes.points.map((point) => {
                  return <div>
                    <li className="DropdownPoint">{point.title}</li>
                    <ul>
                      {
                        point.subpoints.map((subpoint) => (
                          <li className="DropdownPoint">{subpoint}</li>
                        ))
                      }
                    </ul>
                  </div>
                })
              }
            </ul>

            <p className="DropdownText">{data.causes.mainCause}</p>
            <ResponsiveContainer width="99%" height={300} style={{marginTop: "20px", marginBottom: "60px", display: "flex", flexDirection: "column"}}>
              <p style={{fontSize: "1.1rem", marginLeft: "auto", marginRight: "auto", marginBottom: "10px"}}>{secondGraphData.title}</p>
              {getGraphType(secondGraphData)}
            </ResponsiveContainer>
            <p className="DropdownText">{data.causes.closingPoint}</p>
          </Collapsible>

          <Collapsible classParentString="LightTab" trigger={[<p className="Trigger">{data.solutions.header}</p>, <BsChevronDown />]}>
            <p className="DropdownText">{data.solutions.reasons.header}</p>
            <ul>
              {
                data.solutions.reasons.points.map((point) => (
                  <li className="DropdownPoint">{point}</li>
                ))
              }
            </ul>

            <p className="DropdownText">{data.solutions.outcomes.header}</p>
            <ul>
              {
                data.solutions.outcomes.points.map((point) => (
                  <li className="DropdownPoint">{point}</li>
                ))
              }
            </ul>
          </Collapsible>

          <Collapsible classParentString="DarkTab" trigger={[<p className="Trigger">Recommendations</p>, <BsChevronDown />]}>
            <p className="DropdownText">{data.recommendations}</p>
          </Collapsible>

          <div className="ProgressBarContainer">
            {
                progressBarLabels.map((details) => (
                    <ProgressBar label={details.label} colour={details.colour} />
                ))
            }
          </div>
      </div>
    );
}
  
export default ProblemProfileCountry;