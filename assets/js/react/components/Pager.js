import React from 'react';

const Pager = ({page = 1, numOfPages = 1, onPageClick = (pg) => {}}) => {
    const pagesNumbersToShow = 3; //kolko stranok ma byt zobrazenych, musi byt neparne cislo
    const pagesOnSides = Number.parseInt((pagesNumbersToShow - 1)/2);
    page = Number.parseInt(page);
    let firstPage = 1;
    let lastPage = numOfPages;
    const pagesToShow = [];
    if (page - pagesOnSides > firstPage) firstPage = page - pagesOnSides;
    if (page + pagesOnSides < lastPage) lastPage = page + pagesOnSides;
    for (let i = firstPage; i <= lastPage; i++) {
        pagesToShow.push({page: i});
    }

    return(
        <div id="pager">
            {
                firstPage > 1 &&
                    <span
                        className="pager-item"
                        key={1}
                        onClick={() => onPageClick(1)}
                    >
                        ...
                    </span>
            }
            {
                pagesToShow.map(pageItem =>
                    <span
                        className={pageItem.page === page ? "pager-item pager-item-current" : "pager-item"}
                        key={pageItem.page}
                        onClick={() => onPageClick(pageItem.page)}
                    >
                        {pageItem.page}
                    </span>)
            }
            {
                lastPage < numOfPages &&
                <span
                    className="pager-item"
                    key={numOfPages}
                    onClick={() => onPageClick(numOfPages)}
                >
                        ...
                </span>
            }
        </div>
    );
}

export default Pager;