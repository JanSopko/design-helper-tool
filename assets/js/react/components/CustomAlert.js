import React, { useState, useEffect } from 'react';


export const CustomAlert = ({text}) => {
    const [visible, setVisible] = useState(false);

    let classNames = visible ? "custom-alert custom-alert-visible" : "custom-alert";

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <div className={classNames}>
            <div>
                {text}
            </div>
            <div>
                <button>
                    OK
                </button>
            </div>
        </div>
    );
}


