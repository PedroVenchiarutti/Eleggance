import './Card.scss'

export default ({ text, quantity }) => (
    <div className="card">
        <h5>{text}</h5>
        <h2>{quantity}</h2>
    </div>
)