import "../../styles/MetricBar.css"

function MetricBar({ isSelected, fill, content, colour }) {
  return (
    <div className="MetricBarOutter">
      {/* First, check if a colour was passed
      If a colour was passed, check if it's a hex code or a string
      If it's a hex code, make the bar that colour. Otherwise, make it one of the available pre-set colours (red, yellow, green). If it isn't one of the pre-sets, make it grey
      If a colour wasn't passed, choose a pre-set colour based on the amount of fill the bar has */}
      {
        colour ?

        <div>
          {
            /^#[0-9A-F]{6}$/i.test(colour) ?

            <div className="MetricBarInner" style={isSelected ? {"width": `${fill}%`, "backgroundColor": colour} : {"width": "0%", "backgroundColor": colour}}>
              {
                content ? 

                content

                :

                null
              }
            </div>

            :

            <div className={colour.toLowerCase() === "green" || colour.toLowerCase() === "yellow" || colour.toLowerCase() === "red" ? `MetricBarInner ${colour.toLowerCase()}` : "MetricBarInner grey"} style={isSelected ? {"width": `${fill}%`} : {"width": "0%"}}>
              {
                content ? 

                content

                :

                null
              }
            </div>
          }
        </div>

        :

        <div className={fill <= 33 ? "MetricBarInner red" : fill <= 66 ? "MetricBarInner yellow" : "MetricBarInner green"} style={isSelected ? {"width": `${fill}%`} : {"width": "0%"}}>
          {
            content ? 

            content

            :

            null
          }
        </div>
      }
    </div>
  );
}

export default MetricBar;