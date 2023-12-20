import "../ProblemProfileCountry.css";
import ProgressBar from "./ProgressBar";
import Collapsible from 'react-collapsible';
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Label, BarChart, Bar, LineChart, Line } from "recharts";
import { BsChevronDown } from "react-icons/bs";
import TestData from "../testdata/TestData";
import TestDataLine from "../testdata/TestDataLineGraph";

function ProblemProfileCountry({ header, title, summary, causes, solutions, recommendations, progressBarLabels }) {
    return (
        <div className="Card">
          <div className="HeaderSection">
            <p className="Header">{header}</p>
            <h1 className="Title">{title}</h1>
            <p className="Summary">{summary}</p>

            <ResponsiveContainer width="99%" height={200} style={{marginTop: "20px", marginBottom: "20px", display: "flex", flexDirection: "column"}}>
              <p style={{fontSize: "1.1rem", marginLeft: "auto", marginRight: "auto", marginBottom: "10px"}}>Average cancer cases/1000 people</p>
              <BarChart data={TestData}>
                <CartesianGrid strokeDasharray="3 3" />
                {/* <XAxis dataKey="name" />
                <YAxis /> */}
                <XAxis dataKey="name" stroke="white" height={50}>
                  <Label value="Location" position="insideBottom" fill="white" />
                </XAxis>
                <YAxis stroke="white">
                  <Label value="Cases/1000 people" position="insideLeft" angle={270} dy={70} fill="white" />
                </YAxis>
                <Bar dataKey={"value"} fill="#282c34" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* May want to put each Collapsible into its own component. That would help tidy up this part of the code, but also introduce more components that are really simple */}
          <Collapsible classParentString="DarkTab" tabIndex={0} trigger={[<p className="Trigger">Potential Causes</p>, <BsChevronDown />]}>
            <p>{causes.headline}</p>

            <ul>
              {
                causes.points.map((point) => {
                  return <div>
                    <li>{point.title}</li>
                    <ul>
                      {
                        point.subpoints.map((subpoint) => (
                          <li>{subpoint}</li>
                        ))
                      }
                    </ul>
                  </div>
                })
              }
            </ul>

            <p>{causes.mainCause}</p>
            <ResponsiveContainer width="99%" height={200} style={{marginTop: "20px", marginBottom: "60px", display: "flex", flexDirection: "column"}}>
            <p style={{fontSize: "1.1rem", marginLeft: "auto", marginRight: "auto", marginBottom: "10px"}}>Cancer cases in proximity to mining facilities</p>
              <LineChart data={TestDataLine}>
                <CartesianGrid strokeDasharray={"3 3"} />
                <XAxis dataKey="distance" stroke="white" height={50}>
                  <Label value="Distnace from mining facility (kM)" position="insideBottom" fill="white" />
                </XAxis>
                <YAxis stroke="white">
                  <Label value="Cases/1000 people" position="insideLeft" angle={270} dy={60} fill="white" />
                </YAxis>
                <Line type="monotone" dataKey="rate" stroke="#34b4eb" />
              </LineChart>
            </ResponsiveContainer>
            <p>{causes.closingPoint}</p>
          </Collapsible>

          <Collapsible classParentString="LightTab" trigger={[<p className="Trigger">{solutions.header}</p>, <BsChevronDown />]}>
            <p>{solutions.reasons.header}</p>
            <ul>
              {
                solutions.reasons.points.map((point) => (
                  <li>{point}</li>
                ))
              }
            </ul>

            <p>{solutions.outcomes.header}</p>
            <ul>
              {
                solutions.outcomes.points.map((point) => (
                  <li>{point}</li>
                ))
              }
            </ul>
          </Collapsible>

          <Collapsible classParentString="DarkTab" trigger={[<p className="Trigger">Recommendations</p>, <BsChevronDown />]}>
            <p>{recommendations}</p>
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