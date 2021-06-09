import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './App.css';
import routes from './routes'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div class="main-div">
        <header>
          <Link to="/signin"><h2 className="sign-in-h2">Sign In/Up</h2></Link>
          <div className="logo">
            <h1>What2</h1>
            <h1>Watch</h1>
          </div>
          <div></div>
        </header>
        <section>
          {routes}
        </section>
      </div>
    ) 
  }
}

export default App;
