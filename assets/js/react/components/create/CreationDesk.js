import React, { useEffect } from 'react';

export const CreationDesk = () => {
    useEffect(() => {
        document.getElementById('creation-desk').innerHTML = layoutData.pageBody;
    }, []);
    return(
        <div id="creation-desk">
        </div>
    );
}