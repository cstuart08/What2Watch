import React, {Component} from 'react'
import './SignInPage.css'

class SignInPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
        gotAccount: true,
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        favoriteMovie: ""
    }
  }

  toggleAccountStatus = () => {
    this.setState({
        gotAccount: !this.state.gotAccount
    })
  }

  updateStringValue(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
}

  render() {
      console.log(this.state)
      let signInText = this.state.gotAccount ? "Don't have an account? Sign Up" : "Already have an account? Sign In"
      let signInForm = (
        <div className='sign-in-div'>
            <h3 onClick={this.toggleAccountStatus}>{signInText}</h3>
            <div className="sign-in-sub-div">
                <p>Email:</p>
                <input name="email" placeholder="Enter email" onChange={(e) => this.updateStringValue(e)}/>
            </div>
            <div className="sign-in-sub-div">
                <p>Password:</p>
                <input name="password" placeholder="Enter password" onChange={(e) => this.updateStringValue(e)}/>
            </div>
        </div>
      )

      let signUpForm = (
          <div className='sign-in-div'>
            <h3 onClick={this.toggleAccountStatus}>{signInText}</h3>
            <div className="sign-in-sub-div">
                <p>First Name:</p>
                <input name="firstName" placeholder="Enter first name" onChange={(e) => this.updateStringValue(e)}/>
            </div>
            <div className="sign-in-sub-div">
                <p>Last Name:</p>
                <input name="lastName" placeholder="Enter last name" onChange={(e) => this.updateStringValue(e)}/>
            </div>
            <div className="sign-in-sub-div">
                <p>Email:</p>
                <input name="email" placeholder="Enter email" onChange={(e) => this.updateStringValue(e)}/>
            </div>
            <div className="sign-in-sub-div">
                <p>Favorite Movie:</p>
                <input name="favoriteMovie" placeholder="Enter favorite movie" onChange={(e) => this.updateStringValue(e)}/>
            </div>
            <div className="sign-in-sub-div">
                <p>Password:</p>
                <input name="password" placeholder="Enter password" onChange={(e) => this.updateStringValue(e)}/>
            </div>
            <div className="sign-in-sub-div">
                <p>Confirm Password:</p>
                <input name="confirmPassword" placeholder="Confirm password" onChange={(e) => this.updateStringValue(e)}/>
            </div>
          </div>
      )
    return (
        <div className="sign-in-page-div">
            {this.state.gotAccount ? signInForm : signUpForm}
        </div>
    ) 
  }
}

export default SignInPage;