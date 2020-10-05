import React, { useReducer } from "react";
import axios from "../../../Config/Axios";
import githubContext from "./GithubContext";
import githubReducer from "./GithubReducer";

import { SEARCH_USER, GET_USER, GET_REPO, SET_LOADING } from "../Types";

const githubState = (props) => {
  const initialState = {
    users: [],
    setUserProfile: {},
    repos : [],
    isLoading : false
  };
};
