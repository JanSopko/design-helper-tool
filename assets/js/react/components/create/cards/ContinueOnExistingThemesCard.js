import React from 'react';

const ContinueOnExistingThemesCard = () => {
    return(
        <div className="create-card" onClick={() => window.location.href = '/my_themes' }>
            <h1 className="create-card-header">Continue designing your existing Themes!</h1>
            <div className="create-card-content continue-existing">-></div>
        </div>
    );
}

export default ContinueOnExistingThemesCard;