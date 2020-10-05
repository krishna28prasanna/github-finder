import React from "react";
import { Card } from "react-bootstrap";
import "./UserItem.css"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <div>
      <Card>
        <Card.Img src={avatar_url} />
        <Card.Body>
          <h6 className="user-name">{`${login.slice(0,1).charAt(0).toUpperCase()}${login.slice(1).toLowerCase()}`}</h6>
          <div className="text-center">
              <Link to={`/profile/${login}`}><button className="more-info">More</button></Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
UserItem.propTypes = {
    user : PropTypes.object.isRequired
}
export default UserItem;
