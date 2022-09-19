import { useState } from "react"
import Loading from '../../SpinerLoader';

import '../Profile.scss'
export default ({ urlImage }) => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && <div className="loading"><Loading /></div>}
            <img src={urlImage} onLoad={() => setLoading(false)} />
        </>
    )
}