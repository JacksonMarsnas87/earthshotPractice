import "../styles/ProgressBar.css"

function ProgressBar({ label, colour }) {
    // A colour MUST be passed as a prop. This should probably be changed to predefined values (ie. "HIGH" is always green, "MED" is always yellow, etc.)
    return (
        <div className="ProgressBar" style={{background: colour}}>
            {label}
        </div>
    );
}
  
export default ProgressBar;
