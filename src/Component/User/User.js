import React, { useState } from "react";
import UserItem from "./UserItem";
import { Spinner } from "react-bootstrap";
import PropTypes from "prop-types";
import Search from "../Search/Search";
const User = ({ user, isLoading }) => {
  const [searchVal, setSearch] = useState("");
  const searchUser = (text) => {
    setSearch(text);
  };
  return (
    <div className="container-fluid">
      <Search searchUser={searchUser} />
      <div className="row">
        {!isLoading ? (
          user
            .filter((user) => user.login.toLowerCase().includes(searchVal.toLocaleLowerCase()))
            .map((user) => {
              return (
                <div className="col-md-2 mb-2" key={user.id}>
                  <UserItem user={user} />
                </div>
              );
            })
        ) : (
          <div className="text-center">
            <Spinner
              animation="border"
              variant="success"
              className="data-spinner"
            />
          </div>
        )}
      </div>
    </div>
  );
};
User.propTypes = {
  user: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default User;
