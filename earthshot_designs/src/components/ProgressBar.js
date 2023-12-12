import "../ProgressBar.css"

function ProgressBar({ label }) {
    // This is a general-purpose bar that is ALWAYS green. It could be changed to render a different colour depending on what label you provide it
    return (
        <div className="ProgressBar">
            {label}
        </div>
    );
}
  
export default ProgressBar;
