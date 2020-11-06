import React, {useState} from 'react';
import axios from 'axios';

const PagesTable = ({pages, isMyTheme = false}) => {
    const [myPages, setMyPages] = useState(pages);

    const deletePage = pageId => {
        axios.delete(`/delete/page/${pageId}`).then(res => {
            if (res.data.success) {
                const newPages = myPages.filter(page => page.id !== pageId);
                setMyPages(newPages);
            } else if (res.data.message) {
                alert(res.data.message);
            }
        });
    }

    return(
        <table id="pages-table">
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {myPages.map(page => {
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
                                  onClick={() => {
                                      if (confirm('Are you sure you want to delete this Page?')) {
                                          deletePage(page.id);
                                      }
                                  }
                                  }
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