import React, {Component} from 'react'
import './ProfilePage.css'

class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
        user: ""
    }
  }

  render() {
    return (
        <div className="profile-page-div">
            <h1>Welcome to the profile page!</h1>
        </div>
    ) 
  }
}

export default ProfilePage;