import React from 'react';
import Footer from "../Footer";
import CreateThemeForm from "./CreateThemeForm";


const CreateThemePageWrapper = () => {
    return(
        <div id="content">
            <CreateThemeForm />
            <Footer/>
        </div>
    );
}

export default CreateThemePageWrapper;