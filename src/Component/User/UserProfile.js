import React from "react";
import {withRouter } from "react-router-dom";
import axios from "../../Config/Axios";
import Profile from "./Profile";
import {Spinner} from "react-bootstrap"
import Repos from "../Repos/Repos";
import PropTypes from "prop-types"
class UserProfile extends React.Component {
  state = {
    userProfile: {},
    isLoading: true,
    repos : []
  };
  static propTypes = {
      userProfile : PropTypes.object.isRequired,
      isLoading : PropTypes.bool.isRequired,
      repos : PropTypes.array.isRequired
  }
  async componentDidMount() {
    const res = await axios.get(
      `users/${this.props.match.params.name}?client_id='ef90948adc0f7aa7e313'&client_secret='25f6a6c55651c08d434a90cd716340f98c72ff78'`
    );
    const repos = await axios.get(
      `users/${this.props.match.params.name}/repos?per_page=5&sort=created:asc&client_id='ef90948adc0f7aa7e313'&client_secret='25f6a6c55651c08d434a90cd716340f98c72ff78'`
    );
    console.log(res);
    this.setState({
      userProfile: res.data,
      repos,
      isLoading: false,
    });
  }
  render() {
      const {isLoading,userProfile,repos} = this.state
    return (
      <div className="container">
          {!isLoading ? <div><Profile userProfile ={userProfile} /><Repos repos = {repos} /></div> : <Spinner
              animation="border"
              variant="success"
              className="data-spinner"
            />}
        
      </div>
    );
  }
}
export default withRouter(UserProfile);
