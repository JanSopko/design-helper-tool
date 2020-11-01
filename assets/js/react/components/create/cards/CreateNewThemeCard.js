import React from 'react';

const CreateNewThemeCard = () => {
    return(
        <div className="create-card" onClick={() => window.location.href = '/create-theme'}>
            <h1 className="create-card-header">Create a new Theme!</h1>
            <div className="create-card-content create-new">+</div>
        </div>
    );
}

export default CreateNewThemeCard;