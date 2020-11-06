import React from 'react';

const PagesTable = ({pages, isMyTheme = false}) => {
    return(
        <table id="pages-table">
            <thead>
                <tr>
                    <th>Page Hash</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {pages.map(page => {
                return(
                  <tr key={page}>
                      <td>
                          {page}
                      </td>
                      <td>
                          <button className="button-blue">Preview</button>
                      </td>
                      <td>
                          {
                              isMyTheme &&
                                <button className="button-green">Edit</button>
                          }
                      </td>
                      <td>
                          {
                              isMyTheme &&
                              <button className="button-red">Delete</button>
                          }
                      </td>
                  </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default PagesTable;