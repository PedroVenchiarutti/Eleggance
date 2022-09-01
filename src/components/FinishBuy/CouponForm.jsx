import { useState } from "react"

export default ({handleSubmit}) => {
    const [coupon, setCoupon] = useState('');

    return (
        <li>
            <input value={coupon} onChange={e => setCoupon(e.target.value)} />
            <button onClick={event => handleSubmit(event, coupon)}>Ok</button>
        </li>
    )
}