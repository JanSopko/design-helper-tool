import React from 'react';

const PagesTable = ({pages, isMyTheme = false}) => {
    return(
        <table id="pages-table">
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {pages.map(page => {
                return(
                  <tr key={page.urlHash}>
                      <td>
                          {page.urlHash}
                      </td>
                      <td className="page-buttons">
                          {
                              isMyTheme &&
                              <button
                                  className="button-red"
                              >
                                  Delete
                              </button>
                          }
                          {
                              isMyTheme &&
                              <button
                                  className="button-green"
                                  onClick={() => {window.location.href = `/design-page/${page.urlHash}`}}
                              >
                                  Edit
                              </button>
                          }
                          <button
                              className="button-blue"
                          >
                              Preview
                          </button>
                      </td>
                  </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default PagesTable;