import React,{useState} from "react";
import PropTypes from "prop-types"
const Search = (props)=> {
 const [search,setSearchText] = useState("")

  const handleChange = (e) => {
    props.searchUser(e.target.value)
     setSearchText(e.target.value)
  };
  
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="search">Search</label>
            <input
              type="text"
              id="search"
              placeholder="Search User..."
              className="form-control"
              value={search}
              name="search"
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
Search.propTypes = {
    searchUser : PropTypes.func.isRequired
}
export default Search;
