import "../OutcomeCard.css"
import ProgressBar from "./ProgressBar";

function OutcomeCard({ outcomeNumber, title, description, summary }) {
    return (
      <div className="card">
          <p className="outcomeNumber">Bad outcome #{outcomeNumber}</p>
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>

          <div style={{display: "flex"}}>
            <ProgressBar label="HIGH" colour="#34ba5c" />
            <ProgressBar label="HIGH" colour="#34ba5c" />
            <ProgressBar label="HIGH" colour="#34ba5c" />
          </div>

          <h1 className="summary">SUMMARY</h1>

          {
            summary.map((item) => (
                <p>{item}</p>
            ))
          }
      </div>
    );
  }
  
  export default OutcomeCard;
  