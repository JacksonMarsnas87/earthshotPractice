import OutcomeCard from "./OutcomeCard";
import Buckets from "./Buckets";

function Design1() {
  return (
    <div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <OutcomeCard outcomeNumber={1} title="900M = malnutrition." description="Globally, 1 in 3 != safe drinking water, mostly != LDC's" summary={["Here is an item", "Here is another item that is much longer. It might take up more than one line!", "Short item"]} />
        </div>
        <Buckets />
    </div>
  );
}

export default Design1;
