import React from "react";
import './Data.scss';

const Data = ({ header, children }) => {
    return (
        <div className="info">
            <div className="infoText">
                {header}
                <div className="infoData">
                    {children}
                </div>
            </div>
        </div>
    )

}

export default Data