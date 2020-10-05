import React from "react";
import PropTypes from "prop-types"
const Repos = ({repos}) => {
  console.log(repos);
  return <div>Repos</div>;
};
Repos.propTypes = {
    repos : PropTypes.array.isRequired
}
export default Repos;
