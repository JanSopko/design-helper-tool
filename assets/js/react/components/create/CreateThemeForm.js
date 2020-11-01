import React, { useState, useEffect } from 'react';
import axios from "axios";

const sendCreateThemeRequest = (name, privacyLevel, description) => {
    axios.post('/create/theme', {
        name: name,
        privacyLevel: privacyLevel,
        description: description
    }).then(res => {
            console.log(res);
        });
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
                    <label htmlFor="theme-name-input">Theme name</label>
                    <input type="text" id="theme-name-input" name="name" onChange={e => setName(e.target.value)}/>
                </div>
                <div className="form-grouping">
                    <label htmlFor="privacy-level-select">Theme visibility</label>
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
                    <label htmlFor="description-input">Description (optional)</label>
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
                />
            </form>
        </div>
    );
}

export default CreateThemeForm;