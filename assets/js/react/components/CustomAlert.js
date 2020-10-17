import React, { useState, useEffect } from 'react';


export const CustomAlert = ({text}) => {
    return (
        <div>
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


