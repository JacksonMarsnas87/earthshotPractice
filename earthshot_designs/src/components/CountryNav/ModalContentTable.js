import "../../styles/ModalContentTable.css"
import ModalData from "../../testdata/ModalData";
import MetricBar from "./MetricBar";

function ModalContentTable({ countryName, modalCategory }) {
  return (
    <table className="ModalContentTable">
        <tbody className="ModalContentTableBody">
            {
                ModalData[countryName][modalCategory].map((data) => (
                    <tr className="ModalTableRow">
                        <td className="ModalRow Name">{data.title}</td>

                        {
                            data.type === "text" ?

                            <td className="ModalRow TextValue">{data.value}</td>

                            :

                            <td className="ModalRow BarValue">
                                <MetricBar isSelected={true} fill={data.fill} content={data.value} colour={data.colour ? data.colour : null} />
                            </td>
                        }
                    </tr>
                ))
            }
        </tbody>
    </table>
  );
}

export default ModalContentTable;