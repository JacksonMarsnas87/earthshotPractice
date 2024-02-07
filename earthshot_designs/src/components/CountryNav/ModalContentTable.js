import "../../styles/ModalContentTable.css"
import ModalData from "../../testdata/ModalData";

function ModalContentTable() {
  return (
    <table className="ModalContentTable">
        <tbody className="ModalContentTableBody">
            {
                ModalData["Canada"]["Option 1"].map((data) => (
                    <tr className="ModalTableRow">
                        <td className="ModalRow Name">{data.title}</td>
                        <td className="ModalRow Value">{data.value}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  );
}

export default ModalContentTable;