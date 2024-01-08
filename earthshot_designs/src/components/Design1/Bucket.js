import "../../styles/Bucket.css"
import ProgressBar from "../ProgressBar";

function Bucket( {number, stat, background, barLabels} ) {
    return (
        <div className="Bucket" style={{background: background}}>
            <p className="BucketNumber">BUCKET #{number}</p>
            <h1 className="Label">{stat}</h1>

            <div style={{display: "flex"}}>
                {
                    barLabels.map((newLabel) => (
                        <ProgressBar label={newLabel} colour="#34ba5c" />
                    ))
                }
            </div>
        </div>
    );
}
  
export default Bucket;