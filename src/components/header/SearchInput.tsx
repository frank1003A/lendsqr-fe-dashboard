import searchicon from "assets/figma/search.svg"

/** UI Component */
const SearchInput = () => {
  return (
    <div className="search">
        <input type="text" name="search" id="srch" />
        <button>
            <img src={searchicon} alt="search_icon" />
        </button>
    </div>
  )
}

export default SearchInput