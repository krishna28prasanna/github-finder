import React from 'react';
import './App.css';
import {BrowserRouter,Redirect,Route,Switch} from "react-router-dom"
import Header from './Component/Header/Header';
import axios from './Config/Axios';
import User from './Component/User/User';
import UserProfile from './Component/User/UserProfile';
import PropTypes from "prop-types"

class App extends React.Component {
  state = {
    users : [],
    isLoading : true
  }
  static propTypes = {
    users : PropTypes.array.isRequired,
    isLoading : PropTypes.bool.isRequired
  }
  async componentDidMount(){
    const res = await axios.get("users?client_id='ef90948adc0f7aa7e313'&client_secret='25f6a6c55651c08d434a90cd716340f98c72ff78'")
    this.setState({
      users : res.data,
      isLoading : false
    })
  }

  render(){
    const {users,isLoading} = this.state
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
}
export default App;
