import { useNavigate } from 'react-router-dom'
import './Card.scss'

export default ({ link, text, quantity }) => {
    const navigate = useNavigate();

    return (
        <div className="card" onClick={() => navigate(link)}>
            <h5>{text}</h5>
            <h2>{quantity}</h2>
        </div>
    )
}