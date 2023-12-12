import "../ProgressBar.css"
import Bucket from "./Bucket";

function Buckets() {
    return (
        // Ideally the bucket information would come from an API or something, but here I will just hard code it
        <div className="Buckets" style={{marginTop: "500px", display: "flex"}}>
            <Bucket number="1" stat="30% = food & ag." background="#b3a044" barLabels={["{xxx}...", "{xxx}...", "{xxx}..."]} />
            <Bucket number="2" stat="10% = healthcare." background="#d04b44" barLabels={["{xxx}...", "{xxx}...", "{xxx}..."]} />
            <Bucket number="3" stat="25% = water." background="#49a0f8" barLabels={["{xxx}...", "{xxx}...", "{xxx}..."]} />
            <Bucket number="4" stat="25% = energy." background="#2c2708" barLabels={["{xxx}...", "{xxx}...", "{xxx}..."]} />
            <Bucket number="5" stat="3% = housing." background="#f19e38" barLabels={["{xxx}...", "{xxx}...", "{xxx}..."]} />
            <Bucket number="6" stat="5% = environment." background="#4ea938" barLabels={["{xxx}...", "{xxx}...", "{xxx}..."]} />
            <Bucket number="7" stat="2% = economic." background="#7515f4" barLabels={["{xxx}...", "{xxx}...", "{xxx}..."]} />
        </div>
    );
}
  
export default Buckets;