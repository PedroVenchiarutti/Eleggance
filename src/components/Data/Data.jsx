import React from "react";
import './Data.scss';

const Data = (props) => {

return(
<div className="info">
    <div className="infoText">
        <p className="myData">{props.title}</p>
        <div className="infoData">
            {props.body}
        </div>
    </div>
</div>
)

}

export default Data