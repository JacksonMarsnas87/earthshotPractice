import "../ProgressBar.css"

function ProgressBar({ level }) {
    return (
        <div className="ProgressBar" style={{backgroundColor: "green"}}>
            {level}
        </div>
    );
}
  
export default ProgressBar;
