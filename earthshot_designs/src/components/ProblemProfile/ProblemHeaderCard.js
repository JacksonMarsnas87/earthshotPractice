import "../../styles/ProblemHeaderCard.css"
import ProgressBar from "../ProgressBar";

function ProblemHeaderCard({ header, title, summary, details, progressBarLabels }) {
    return (
        <div className="ProblemHeaderCard">
          <p className="Header">{header} #1</p>
          <h1 className="Title">{title}</h1>
          <p className="Summary">{summary}</p>

          <div className="DetailsContainer">
            {
                details.map((item) => (
                    <p className="Details">{item}</p>
                ))
            }
          </div>

          <div className="ProgressBarContainer">
            <ProgressBar label="HIGH..." colour="#34ba5c" />
            <ProgressBar label="HIGH..." colour="#34ba5c" />
            <ProgressBar label="HIGH..." colour="#34ba5c" />
          </div>
      </div>
    );
}
  
export default ProblemHeaderCard;