import React, { useState, useEffect } from 'react';

const FloatingWindow = ({initActive = false, initContents = []}) => {
    const windowClassName = "floating-window";
    const overTopClassName = "over-top";

    const [active, setActive] = useState(false);

    useEffect(
        () => setActive(initActive),
        []
    );

    let className = active ? windowClassName : `${windowClassName} ${overTopClassName}`;

    return(
        <div className={className}>
            <span style={{display:'flex',justifyContent:'flex-end'}}>
                <span
                    className="exit-button button-red"
                    onClick={() => {setActive(false)}}
                    style={{color:'white'}}
                >
                    X
                </span>
            </span>
            {
                initContents.map(item => {
                    return(
                        item
                    );
                })
            }
        </div>
    );
}

export default FloatingWindow;