import React from 'react';

const PagesTable = ({pages}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Smth</th>
                    <th>Buttons</th>
                </tr>
            </thead>
            <tbody>
            {pages.map(page => {
                return(
                  <tr key={page}>
                      <td>{page}</td>
                      <td>{page}</td>
                      <td>{page}</td>
                  </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default PagesTable;