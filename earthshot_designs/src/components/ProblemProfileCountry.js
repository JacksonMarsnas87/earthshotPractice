import "../ProblemProfileCountry.css";
import graph from "../images/lineGraph.png";
import ProgressBar from "./ProgressBar";
import Collapsible from 'react-collapsible';
import { BsChevronDown } from "react-icons/bs";

function ProblemProfileCountry({ header, title, summary, causes, progressBarLabels }) {
    return (
        <div className="Card">
          <p className="Header">{header}</p>
          <h1 className="Title">{title}</h1>
          <p className="Summary">{summary}</p>
          
          <Collapsible tabIndex={0} trigger={["Potential Causes", <BsChevronDown />]}>
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
            {/* This is here as a placeholder. I didn't want to use a chart library and create dummy data just for this example */}
            <img src={graph} style={{width: "100%"}} />
            <p>{causes.closingPoint}</p>
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