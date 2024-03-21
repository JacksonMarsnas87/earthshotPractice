import "../../styles/ProblemCategory.css"

function ProblemCategory({ title, icon, text }) {
    return (
        <div className="ProblemCategoryCard">
            <h1 className="ProblemCategoryCardTitle">{title}</h1>
            <>
                {icon}
            </>
            <p className="ProblemCategoryCardText">{text}</p>
        </div>
  );
}

export default ProblemCategory;