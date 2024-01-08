import "../../styles/NavCard.css";
import { BsFillHeartPulseFill, BsExclamationTriangleFill, BsHammer } from "react-icons/bs";

function NavCard({ iconName, title, category, summary, colourScheme }) {

    const getIconFromName = (name) => {
        switch(name) {
            case "heart":
                return <BsFillHeartPulseFill className="CardIcon" style={{color: colourScheme.primary}} />
            case "hammer":
                return <BsHammer className="CardIcon" style={{color: colourScheme.primary}} />
            default:
                return <BsExclamationTriangleFill className="CardIcon" style={{color: colourScheme.primary}} />
        }
    }

    return (
        <div className="NavCard">
            <div className="IconContainer">
                {
                    getIconFromName(iconName)
                }
            </div>
            
            <h1 className="NavCardTitle">{title}</h1>
            <div className="CategoryContainer">
                <p className="NavCardCategory" style={{color: colourScheme.secondary, backgroundColor: colourScheme.primary}}>{category}</p>
            </div>
            <p className="NavCardSummary">{summary}</p>
        </div>
    );
}

export default NavCard;