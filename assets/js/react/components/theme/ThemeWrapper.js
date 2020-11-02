import React from 'react';
import Footer from "../Footer";

const ThemeWrapper = () => {
    return(
        <div id="content">
            <section>
                <h1>{layoutData.themeName}</h1>
                <p>{layoutData.themeDescription}</p>
                <button>Download</button>
                {
                    layoutData.isMyTheme &&
                    <button className="button-green">Update</button>
                }
                <ul>
                    {
                        layoutData.pages.map(page => {
                          return (
                              <li key={page}>{page}</li>
                          );
                        })
                    }
                </ul>
            </section>
            <Footer/>
        </div>
    );
}

export default ThemeWrapper;