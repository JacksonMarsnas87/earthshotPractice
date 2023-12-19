import OutcomeCard from "./OutcomeCard";
import Buckets from "./Buckets";
import Xarrow from "react-xarrows"

function Design1() {
  return (
    <div>
        <div id="OutcomeCard" style={{display: "flex", justifyContent: "center"}}>
            <OutcomeCard outcomeNumber={1} title="900M = malnutrition." description="Globally, 1 in 3 != safe drinking water, mostly != LDC's" summary={["Here is an item", "Here is another item that is much longer. It might take up more than one line!", "Short item"]} />
        </div>

        <div id="BucketCard">
            <Buckets />
        </div>

        <Xarrow start="OutcomeCard" end="BucketCard" showHead={false} startAnchor={"bottom"} path={"grid"} color="white" />
    </div>
  );
}

export default Design1;
