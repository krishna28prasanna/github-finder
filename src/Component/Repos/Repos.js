import React from "react";
import PropTypes from "prop-types"
import {ListGroup} from "react-bootstrap"
const Repos = ({repos}) => {
  console.log(repos);
  return <div>
<ListGroup>
    {repos.map(repo=>{
        return (<div key={repo.id}>
            <a href={repo.html_url} target="_blank" ><ListGroup.Item>{repo.name}</ListGroup.Item></a><br/>
        </div>)
    })}
</ListGroup>
  </div>;
};
Repos.propTypes = {
    repos : PropTypes.array.isRequired
}
export default Repos;
