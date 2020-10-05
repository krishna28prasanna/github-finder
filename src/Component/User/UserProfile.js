import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "../../Config/Axios";
import Profile from "./Profile";
import { Spinner } from "react-bootstrap";
import Repos from "../Repos/Repos";
import PropTypes from "prop-types";
const UserProfile = (props) => {
  const [userProfile, setUserProfile] = useState({});
  const [repos, setRepos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `users/${props.match.params.name}?client_id='ef90948adc0f7aa7e313'&client_secret='25f6a6c55651c08d434a90cd716340f98c72ff78'`
      )
      .then((res) => {
        setUserProfile(res.data);
      });

    axios
      .get(
        `users/${props.match.params.name}/repos?per_page=5&sort=created:asc&client_id='ef90948adc0f7aa7e313'&client_secret='25f6a6c55651c08d434a90cd716340f98c72ff78'`
      )
      .then((res) => {
        setRepos(res.data);
      });
    setLoading(false);
  });
  return (
    <div className="container">
      {!isLoading ? (
        <div>
          <Profile userProfile={userProfile} />
          <Repos repos={repos} />
        </div>
      ) : (
        <Spinner
          animation="border"
          variant="success"
          className="data-spinner"
        />
      )}
    </div>
  );
};
UserProfile.propTypes = {
  userProfile: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  repos: PropTypes.array.isRequired,
};
export default withRouter(UserProfile);
