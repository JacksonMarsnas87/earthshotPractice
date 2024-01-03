import "../ProblemProfileCountry.css";
import ProgressBar from "./ProgressBar";
import Collapsible from 'react-collapsible';
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Label, BarChart, Bar, LineChart, Line } from "recharts";
import { BsChevronDown } from "react-icons/bs";
import TestData from "../testdata/TestData";
import TestDataLine from "../testdata/TestDataLineGraph";
import { useState, useEffect } from "react";

function ProblemProfileCountry({ header, data, graphData, progressBarLabels }) {

  const [width, setWidth] = useState(window.innerWidth);
  const [barGraphData, setBarGraphData] = useState(0)
  const [lineGraphData, setLineGraphData] = useState(0)
  const tinyScreenWidth = 600;
  
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    setBarGraphData(graphData[data.graphDataNumber].barGraphData)
    setLineGraphData(graphData[data.graphDataNumber].lineGraphData)
  }, [])

    return (
        <div className={width <= tinyScreenWidth ? "TinyCard" : "Card"}>
          <div className="HeaderSection">
            <p className="Header">{header}</p>
            <h1 className="Title">{data.title}</h1>
            <p className="Summary">{data.summary}</p>

            <ResponsiveContainer width="99%" height={200} style={{marginTop: "20px", marginBottom: "20px", display: "flex", flexDirection: "column"}}>
              <p style={{fontSize: "1.1rem", marginLeft: "auto", marginRight: "auto", marginBottom: "10px"}}>{barGraphData.title}</p>
              <BarChart data={barGraphData.data}>
                <CartesianGrid strokeDasharray="3 3" />
                {/* <XAxis dataKey="name" />
                <YAxis /> */}
                <XAxis dataKey="name" stroke="white" height={50}>
                  <Label value={barGraphData.xAxisLabel} position="insideBottom" fill="white" />
                </XAxis>
                <YAxis stroke="white">
                  <Label value={barGraphData.yAxisLabel} position="insideLeft" angle={270} dy={70} fill="white" />
                </YAxis>
                <Bar dataKey={"value"} fill="#282c34" />
              </BarChart>
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
            <ResponsiveContainer width="99%" height={200} style={{marginTop: "20px", marginBottom: "60px", display: "flex", flexDirection: "column"}}>
            <p style={{fontSize: "1.1rem", marginLeft: "auto", marginRight: "auto", marginBottom: "10px"}}>{lineGraphData.title}</p>
              <LineChart data={lineGraphData.data}>
                <CartesianGrid strokeDasharray={"3 3"} />
                <XAxis dataKey="distance" stroke="white" height={50}>
                  <Label value={lineGraphData.xAxisLabel} position="insideBottom" fill="white" />
                </XAxis>
                <YAxis stroke="white">
                  <Label value={lineGraphData.yAxisLabel} position="insideLeft" angle={270} dy={60} fill="white" />
                </YAxis>
                <Line type="monotone" dataKey="rate" stroke="#34b4eb" />
              </LineChart>
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