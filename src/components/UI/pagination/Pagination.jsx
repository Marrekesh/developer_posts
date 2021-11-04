import {getPageArray} from '../../utils/getPages'

const Pagination = ({totalPages, page, changePage }) => {

    let pageArray = getPageArray(totalPages)

    return (
        <div className="page__wrapper">
            {pageArray.map(item => 
                <span 
                key={item} 
                className={page === item ? 'page page__current' : 'page'}
                onClick={() => changePage(item)}>
                    {item}
                </span>
            )} 
        </div>
    )
}

export default Pagination