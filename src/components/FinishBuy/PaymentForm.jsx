import './PaymentForm.scss'

export default ({ paymentMethod, setPaymentMethod }) => 
    <div className="payment-methods">
        <li className={paymentMethod === "PIX" ? 'selected' : ''} onClick={() => setPaymentMethod('PIX')}>
            <img className="iconPaymentMethod" src="./icons/icon-pix.svg" />
            PIX
        </li>
        <li className={paymentMethod === "BOLETO" ? 'selected' : ''} onClick={() => setPaymentMethod('BOLETO')}>
            <img
                className="iconPaymentMethod"
                src="./icons/icon-boleto.png"
            />
            BOLETO
        </li>
        <li className={paymentMethod === "CRÉDITO" ? 'selected' : ''} onClick={() => setPaymentMethod("CRÉDITO")}>
            <img
                className="iconPaymentMethod"
                src="./icons/icone-credit-card.png"
            />
            CARTÃO DE CRÉDITO
        </li>
    </div>