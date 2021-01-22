import React, {Component} from 'react'
import './App.css';
import Movies from './components/Movies'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div class="main-div">
        <header>
          <h1>What2</h1>
          <h1>Watch</h1>
        </header>
        <section>
          <Movies />
        </section>
      </div>
    ) 
  }
}

export default App;
