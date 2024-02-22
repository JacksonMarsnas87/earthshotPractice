import "../../styles/ModalContentTable.css"
import ModalData from "../../testdata/ModalData";
import MetricBar from "./MetricBar";
import Popup from 'reactjs-popup';

function ModalContentTable({ countryName, modalCategory, size, data }) {
  return (
    <table className="ModalContentTable">
        <tbody className="ModalContentTableBody">
            {
                data && data[modalCategory] ?

                Object.keys(data[modalCategory]).map((dataTitle) => {
                    let newData = data[modalCategory][dataTitle]
                    
                    // Check if the entry is an object. The database stores IDs alongside object, which should not be displayed, hence we check the type to make sure we don't display the ID
                    if (typeof newData === "object") {
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
    
                                    newData.type === "menu" ?
    
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
    
                                    :
                                    
                                    // This is here just in case there is an entry with an invalid type. It simply displays a blank table entry
                                    null
                                }
                            </tr>
                        )
                    }
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