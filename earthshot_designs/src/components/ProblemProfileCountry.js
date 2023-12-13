import "../ProblemProfileCountry.css"
import ProgressBar from "./ProgressBar";

function ProblemProfileCountry({ header, amount, country, summary, profile, progressBarLabels, progressBarColours }) {
    return (
        <div className="Card">
          <p className="Header">{header}</p>
          <h1 className="Title">{amount} in {country}</h1>
          <p className="Summary">{summary}</p>
          
          <div className="ProblemProfileContainer">{profile}</div>

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