import './SaleTag.scss'

export default ({ text }) => (
    <p className="sale">{text ?? "Oferta"}</p>
)