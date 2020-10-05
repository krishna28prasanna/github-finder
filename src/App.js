import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter,Redirect,Route,Switch} from "react-router-dom"
import Header from './Component/Header/Header';
import axios from './Config/Axios';
import User from './Component/User/User';
import UserProfile from './Component/User/UserProfile';
import PropTypes from "prop-types"

const App = () => {

  const [users,setUsers] = useState([])
  const [isLoading,setLoading] = useState(true)
 
  useEffect(()=>{
    axios.get("users?client_id='ef90948adc0f7aa7e313'&client_secret='25f6a6c55651c08d434a90cd716340f98c72ff78'")
    .then(res=>{
      setUsers(res.data)
    setLoading(false)
    })
  },[])

    return (
      <div>
       <BrowserRouter>
       <Header />
        <Switch>
          <Route path="/" render={()=><User user={users} isLoading={isLoading}/>} exact />
          <Route path="/profile" render={()=><Redirect to="/" />} exact />
          <Route path="/profile/:name" render={()=><UserProfile user={users} isLoading={isLoading} />} exact />
        </Switch>
       </BrowserRouter>
      </div>
    )
  }

App.propTypes = {
  users : PropTypes.array.isRequired,
  isLoading : PropTypes.bool.isRequired
}
export default App;
