import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import LineChart from './components/LineChart';
// import Aside from './components/Aside'
import Form from './components/Form'
// import Main from './components/Main.js';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      shot_profiles: [],
      formInputs: {
        field_goals_made: '',
        field_goals_attempted: '',
        field_goal_percentage: '',
        area: '',
      }
    }
 
  }

  // handleSubmit (event) {
  //   event.preventDefault()
  //   console.log(this.state.formInputs);
  // }

  // handleAdd (event, formInputs) {
  //   event.preventDefault()
  //   fetch('/nba_finals', {
  //     body: JSON.stringify(formInputs),
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(createdshot_profile => {
  //     return createdshot_profile.json()
  //   })
  //   .then(jsonedshot_profile => {
  //     this.setState({
  //       formInputs: {
  //         field_goals_made: '',
  //         field_goals_attempted: '',
  //         field_goal_percentage: '',
  //         area: '',
  //       },
  //       shot_profile: [jsonedshot_profile, ...this.state.shot_profile]
  //     })
  //   })
  //   .catch(error => console.log(error));
    
  // }

  render() {
  return (
    <div className="App">
    <div className="container">
      <LineChart handleSubmit={this.handleAdd} />
      {/* <Main/> */}
      {/* <Aside /> */}
      <br></br>
      <Form/>
      </div>
    </div>
  );
}
}

export default App;
