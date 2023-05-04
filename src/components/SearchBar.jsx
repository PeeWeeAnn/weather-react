import '../assets/scss/SearchBar.scss'
import search from '../assets/icons/search.svg'

const SearchBar = () => {
    return (
        <div className="container__search search">
            <input className="search__input"/>
            <button className='search__button'>
                <img src={search} alt="Search" />
            </button>
        </div>
    )
}

export default SearchBar