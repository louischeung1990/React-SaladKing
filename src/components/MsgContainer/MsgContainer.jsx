import "./MsgContainer.css"

export default function MsgContainer({spice, message}) {
    return (
    <div>
        <h2>Spice Level: {spice}</h2>
        <h2 className={`spice-${spice}`}>Status: {message}</h2>
    </div>
    )
}