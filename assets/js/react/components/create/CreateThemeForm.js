import React, { useState, useEffect } from 'react';
import axios from "axios";

const LABEL_TEXT_NAME = 'Theme name';
const LABEL_TEXT_PRIVACY_LEVEL = 'Theme visibility';
const LABEL_TEXT_DESCRIPTION = 'Description (optional)';

const sendCreateThemeRequest = (name, privacyLevel, description) => {
    axios.post('/create/theme', {
        name: name,
        privacyLevel: privacyLevel,
        description: description
    }).then(res => {
            if (res.data.length > 0 || !res.data.success) {
                showWarnings(res.data)
            } else {
                alert('Theme successfully created!');
                window.location.href = '/my_themes';
            }
        });
}

const showWarnings = data => {
    console.log (data.name);
    const nameLabel = document.getElementById('theme-name-label');
    const privacyLevelLabel = document.getElementById('privacy-level-label');
    const descriptionLabel = document.getElementById('description-label');

    if (data.name) {
        nameLabel.classList.add('warning');
        nameLabel.innerHTML = data.name;
    } else {
        nameLabel.classList.remove('warning');
        nameLabel.innerHTML = LABEL_TEXT_NAME;
    }

    if (data.privacyLevel) {
        privacyLevelLabel.classList.add('warning');
        privacyLevelLabel.innerHTML = data.privacyLevel;
    } else {
        privacyLevelLabel.classList.remove('warning');
        privacyLevelLabel.innerHTML = LABEL_TEXT_PRIVACY_LEVEL;
    }

    if (data.description) {
        descriptionLabel.classList.add('warning');
        descriptionLabel.innerHTML = data.description;
    } else {
        descriptionLabel.classList.remove('warning');
        descriptionLabel.innerHTML = LABEL_TEXT_DESCRIPTION;
    }

    if (data.message && !data.name) {
        nameLabel.classList.add('warning');
        nameLabel.innerHTML = data.message;
    } else if (!data.name) {
        nameLabel.classList.remove('warning');
        nameLabel.innerHTML = LABEL_TEXT_NAME;
    }
}

const CreateThemeForm = () => {
    const [name, setName] = useState('');
    const [privacyLevel, setPrivacyLevel] = useState(1);
    const [description, setDescription] = useState(1);
    const [allowedPrivacyLevels, setAllowedPrivacyLevels] = useState([]);

    useEffect(() => {
        axios.get('/data/allowed_privacy_levels').then(res => {
            if (res.data && res.data.length > 0) {
                setAllowedPrivacyLevels(res.data);
            }

        });
    }, []);
    return(
        <div id="form-wrapper">
            <form action="/create/theme" id="create-theme-form">
                <div className="form-grouping">
                    <label id="theme-name-label" htmlFor="theme-name-input">{LABEL_TEXT_NAME}</label>
                    <input type="text" id="theme-name-input" name="name" onChange={e => setName(e.target.value)}/>
                </div>
                <div className="form-grouping">
                    <label id="privacy-level-label" htmlFor="privacy-level-select">{LABEL_TEXT_PRIVACY_LEVEL}</label>
                <select
                    name="privacyLevel"
                    id="privacy-level-select"
                    onChange={e => setPrivacyLevel(e.target.value)}
                >
                    {
                        allowedPrivacyLevels.map(item => {
                            return(
                                <option
                                    key={item.id}
                                    value={item.id}
                                >
                                    {item.description}
                                </option>
                            );
                        })
                    }
                </select>
                </div>
                <div className="form-grouping">
                    <label id="description-label" htmlFor="description-input">{LABEL_TEXT_DESCRIPTION}</label>
                    <textarea
                        name="description"
                        id="description-input"
                        cols="30"
                        rows="5"
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    onClick={() => sendCreateThemeRequest(name, privacyLevel, description)}
                    className="button-green"
                    value="Create Theme"
                />
            </form>
        </div>
    );
}

export default CreateThemeForm;