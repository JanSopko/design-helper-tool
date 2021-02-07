import React from 'react';

const EnglishContent = () => {
    return(
        <div>
            <section>
                <h1>Introduction</h1>
                <p>
                    This web application was created as a school project at University of Zilina.
                    The purpose of this application is to make creation of themes for static websites easier for people without programming skills.
                    By no means can it compete with tools like WordPress, but on the other hand, it is much easier to use.
                </p>
                <br/>
                <h1>How to use</h1>
                <ul>
                    <li key={1}>
                        In order to create a web theme, you must be <b>logged</b> into a user <b>account</b>.
                        You can either log into an existing account or create a new one in the <b>Sign in/up</b> section.
                    </li><br/>
                    <li key={2}>
                        Continue to <b>Create</b> section and choose to either create a new theme or continue designing some of your existing themes.
                    </li><br/>
                    <li key={3}>
                        If you choose yo create a new <b>Theme</b>, a form will be displayed. Fill out the name of
                        your new theme (same user can't have multiple themes with the same name), choose <b>privacy level</b>
                        of your theme and optionally ad a description. You can change these properties any time.
                    </li><br/>
                    <li key={4}>
                        There are 3 <b>Privacy levels</b> of themes.
                        <ul>
                            <li><b>Private</b> (visible only for the owner)</li>
                            <li><b>Visible for logged users only</b></li>
                            <li><b>Public</b> (visible for everyone)</li>
                        </ul>
                    </li><br/>
                    <li key={5}>
                        Each theme can have multiple pages, you can add them by clicking on <b>Add page</b> button.
                    </li>
                    <li>
                        You can edit pages by clicking on <b>Edit</b> button in the pages list. After that, a menu with GUI
                        will be displayed to you, as you can see on the <a href="#showcase-video" onClick={() => window.location='#showcase-video'}>video below</a>.
                    </li>
                    <li key={6}>
                        Finally, when you're all done, you can download your theme by clicking the <b>Download</b> button in the theme section.
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default EnglishContent;