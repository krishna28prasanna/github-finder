import React from "react";
import PropTypes from "prop-types"
class Search extends React.Component {
  state = {
    search: "",
  };
static propTypes = {
    searchUser : PropTypes.func.isRequired
}

  handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    },()=>{
        this.props.searchUser(this.state.search)
    }
    )
  };
  render() {
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
              value={this.state.search}
              name="search"
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default Search;
