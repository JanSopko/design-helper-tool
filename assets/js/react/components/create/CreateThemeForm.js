import React, { useState, useEffect } from 'react';
import axios from "axios";

const sendCreateThemeRequest = (name, privacyLevel) => {
    axios.post('/create/theme', {name: name, privacyLevel: privacyLevel})
        .then(res => {
            console.log(res);
        });
}

const CreateThemeForm = () => {
    const [name, setName] = useState('');
    const [privacyLevel, setPrivacyLevel] = useState(1);
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
            <form action="/create/theme">
                <input type="text" name="name" onChange={e => setName(e.target.value)}/>
                <select name="privacyLevel" id="privacy-level-select">
                    {
                        allowedPrivacyLevels.map(item => {
                            return(
                                <option key={item} value={item}>{item}</option>
                            );
                        })
                    }
                </select>
                <input type="submit" onClick={() => sendCreateThemeRequest(name, privacyLevel)}/>
            </form>
        </div>
    );
}

export default CreateThemeForm;