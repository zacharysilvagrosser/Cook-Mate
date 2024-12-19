function Pagination(props) {
    // fetch the correct recipes for the new page based on what search type was already clicked
    function nextPage() {
        props.setPage(props.page + 100);
    }

    return <button onClick={nextPage}>Next Page</button>
}

export default Pagination;