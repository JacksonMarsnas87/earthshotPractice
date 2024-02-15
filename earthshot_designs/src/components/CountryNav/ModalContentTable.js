import "../../styles/ModalContentTable.css"
import ModalData from "../../testdata/ModalData";
import MetricBar from "./MetricBar";
import Popup from 'reactjs-popup';

function ModalContentTable({ countryName, modalCategory, size, data }) {
  return (
    <table className="ModalContentTable">
        <tbody className="ModalContentTableBody">
            {
                // ModalData[countryName][modalCategory] ?
                data && data[modalCategory] ?

                // Object.keys(ModalData[countryName][modalCategory]).map((dataTitle) => {
                Object.keys(data[modalCategory]).map((dataTitle) => {
                    let newData = data[modalCategory][dataTitle]
                    return (
                        <tr className={`ModalTableRow ${size}`}>
                            <td className="ModalRow Name">{newData.title}</td>

                            {
                                newData.type === "text" ?

                                <td className="ModalRow TextValue">{newData.value}</td>

                                :

                                newData.type === "bar" ?

                                <td className="ModalRow BarValue">
                                    <MetricBar isSelected={true} fill={newData.fill} content={newData.value} colour={newData.colour ? newData.colour : null} />
                                </td>

                                :

                                <td className="ModalRow Menu">
                                    <Popup
                                        trigger={<button className="FoodMenuButton">Hover to see common foods</button>}
                                        position={size === "mobile" ? "top right" : "left bottom"}
                                        on={['hover']}
                                        closeOnDocumentClick
                                    >
                                        <span className="FoodMenuText">
                                            {newData.data}
                                        </span>
                                    </Popup>
                                </td>
                            }
                        </tr>
                    )
                })

                :

                <div className="NoContentContainer">
                    <div className={`NoContent ${size}`}>
                        <p>There is no data to display at this time</p>
                    </div>
                </div>
            }
        </tbody>
    </table>
  );
}

export default ModalContentTable;