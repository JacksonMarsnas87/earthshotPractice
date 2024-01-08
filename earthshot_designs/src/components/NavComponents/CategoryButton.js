import "../../styles/CategoryButton.css";

function CategoryButton({ text, colour, category, setCategory }) {

  function hoverOver(e) {
    if(category !== text) {
      e.target.style.background = colour
      e.target.style.color = "white"
    } else {
      e.target.style.background = "white"
      e.target.style.color = colour
    }
  }

  function leaveHover(e) {
    if(category !== text) {
      e.target.style.background = "white"
      e.target.style.color = colour
    } else {
      e.target.style.background = colour
      e.target.style.color = "white"
    }
  }

  return (
    <button className="CategoryButton" style={{background: category == text ? colour : "white", color: category == text ? "white" : colour, border: `2px solid ${colour}`}} onClick={() => setCategory(text)} onMouseOver={hoverOver} onMouseLeave={leaveHover}>{text}</button>
  );
}

export default CategoryButton;