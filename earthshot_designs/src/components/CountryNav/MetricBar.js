import "../../styles/MetricBar.css"

function MetricBar({ isSelected, fill }) {
  return (
    <div className="MetricBarOutter">
        <div className={fill <= 33 ? "MetricBarInner red" : fill <= 66 ? "MetricBarInner yellow" : "MetricBarInner green"} style={isSelected ? {"width": `${fill}%`} : {"width": "0%"}} />
    </div>
  );
}

export default MetricBar;