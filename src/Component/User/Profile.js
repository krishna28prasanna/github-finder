import React from "react"
import "./UserProfile.css";
import { Badge, Button } from "react-bootstrap";
import PropTypes from "prop-types"
const Profile = ({userProfile}) =>{
    const {
        name,
        avatar_url,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
      } = userProfile;
    return(
        <div>
            <div className="row">
          <div className="col-md-4">
            <img src={avatar_url} alt="no img" className="profile-img" />
            <h4 className="text-center mt-2">{name}</h4>
          </div>
          <div className="col-md-8">
            <div className="mt-5">
              <h4>About Me</h4>
              <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis at efficitur mi. Pellentesque et lacinia neque, finibus
                    iaculis purus. Ut condimentum nec nulla eget consequat.
                    Mauris elementum lorem eget feugiat maximus. Nam sapien
                    metus, dictum sed enim a, condimentum interdum libero.
              </p>
              <a href={html_url} target="_blank">
                <button className="mt-1">View My Github</button>
              </a>
              <div className="row mt-4">
                <div className="col-md-3">
                  <Button variant="primary">
                    Public Gists <Badge variant="light">{public_gists}</Badge>
                  </Button>
                </div>
                <div className="col-md-3">
                  <Button variant="primary">
                    Public Repos <Badge variant="light">{public_repos}</Badge>
                  </Button>
                </div>
                <div className="col-md-3">
                  <Button variant="primary">
                    Followers <Badge variant="light">{followers}</Badge>
                  </Button>
                </div>
                <div className="col-md-3">
                  <Button variant="primary">
                    Following <Badge variant="light">{following}</Badge>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}
Profile.propTypes = {
userProfile : PropTypes.object.isRequired
}
export default Profile