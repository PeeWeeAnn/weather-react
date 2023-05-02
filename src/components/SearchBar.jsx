import '../assets/scss/SearchBar.scss'

const SearchBar = () => {
    return (
        <div className="container__search search">
            <input className="search__input input"/>
                <button className='input__button'>
                    <img src="../assets/icons/search.svg" alt="Search" />
                </button>
        </div>
    )
}

export default SearchBar