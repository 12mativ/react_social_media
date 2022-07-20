import classes from './Paginator.module.css'
import React, {useState} from "react";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={classes.pagination}>
            {portionNumber > 1 &&
                <button onClick={() => setPortionNumber(portionNumber - 1)}
                        className={`${classes.user_btn} ${classes.user_btn_left} btn`}
                >
                    PREV
                </button>
            }
            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page => {
                    return (
                        <span
                            key={page}
                            className={currentPage === page
                                ? `${classes.selectedPage} ${classes.userPage}`
                                : classes.userPage}
                            onClick={() => {
                                onPageChanged(page)
                            }}
                        >
                            {page}
                        </span>
                    )
                })}
            {portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}
                        className={`${classes.user_btn} ${classes.user_btn_right} btn`}
                >
                    NEXT
                </button>
            }
        </div>
    )
}

export default Paginator;