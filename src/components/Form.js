import React from 'react'
import Input from './Input.js'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
              field_goals_made: '',
              field_goals_attempted: '',
              field_goal_percentage: '',
              area: '',
              team_id: '',
          }
        // this.handleAdd = this.handleAdd.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        // this.handleClick = this.handleClick.bind(this);
 
    }

    // i attempted to create an handleClick to select the team to direct the post route for creating a new shot profile.
    // I because of time I left the route hard coded to default for the Toronto Raptors. I will create a drop down selection for my final project. 

    // handleClick(event) {
    //     event.preventDefault()
    //     console.log(this.state.team_id);
    //     // let Golden_State_Warriors = this.state.team_id[1]
    //     // let Toronto_Raptors = team_id[2]
    //     this.setState(
    //         // {team_id})
    // }

    handleSubmit(event) {
        // console.log('hi')
        event.preventDefault()
        console.log(this.state);
        let shot_profiles = this.state
        console.log(shot_profiles);
        

        event.preventDefault()
        fetch
        (`http://localhost:3000/nba_finals/${2}/shot_profiles`, // create a onCLick function to change team to ${this.state.team_id}
        {
          body: JSON.stringify(shot_profiles),
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        })
        .then(createdshot_profile => {
          return createdshot_profile.json()
        })
        .then(jsonedshot_profile => {
          this.setState({
            // formInputs: {
              field_goals_made: '',
              field_goals_attempted: '',
              field_goal_percentage: '',
              area: '',
            // },
            // shot_profile: [jsonedshot_profile, ...this.state.shot_profile]
          })
        })
        .catch(error => console.log(error));
    }


    handleChange(event, formInputs) {
        event.preventDefault()
        console.log(event.target.id)
        console.log(event.target.value)
        this.setState({
            [event.target.id]: event.target.value
        })
            
            console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    handleChange={this.handleChange}
                    name={'field_goals_made'}
                    placeholder={'FGM'}
                    type={'text'}
                    value={this.state.field_goals_made}
                    id={'field_goals_made'}
                />
                <Input
                    handleChange={this.handleChange}
                    name={'field_goals_attempted'}
                    placeholder={'FGA'}
                    type={'text'}
                    value={this.state.field_goals_attempted}
                    id={'field_goals_attempted'}
                />
                <Input
                    handleChange={this.handleChange}
                    name={'field_goal_percentage'}
                    placeholder={'FG%'}
                    type={'text'}
                    value={this.state.field_goal_percentage}
                    id={'field_goal_percentage'}
                />
                <Input
                    handleChange={this.handleChange}
                    name={'area'}
                    placeholder={'Area'}
                    type={'text'}
                    value={this.state.area}
                    id={'area'}
                />
                <input type='submit' value="Update shot selection" />
            </form>

        )
    }
}

export default Form


// UNUSED CODE:

            // field_goals_made: field_goals_made,
            // field_goals_attempted: '',
            // field_goal_percentage: '',
            // area: '',
            
  
        // let shot_profiles = {
        //     field_goals_made: 1,
        //     field_goals_attempted: 1,
        //     field_goal_percentage: 50.0,
        //     area: 'half court',
        // }

         // handleAdd(event, formInputs) {
    //     console.log('handlethis!')
    //     console.log(formInputs);

    // }