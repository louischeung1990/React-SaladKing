import "./BtnContainer.css"

function BtnContainer(props) {
    return (
        <div className = "BtnContainer">
            <button onClick={props.handleAddSpice}>Add Some Heat</button>
            <button onClick={props.handleSubtractSpice}>Cool It Off</button>
        </div>
    )
    
}

export default BtnContainer