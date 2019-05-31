import React from 'react'
import Input from './Input.js'

class Form extends React.Component {
    constructor(props) {
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
        // this.handleAdd = this.handleAdd.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        console.log('hi')
        event.preventDefault()
        console.log(this.state.formInputs);
        let shot_profiles = {
            field_goals_made: this.state.formInputs.field_goals_made,
            field_goals_attempted: '',
            field_goal_percentage: '',
            area: '',
        }
  


        event.preventDefault()
        fetch
        // (`/nba_finals${nba_final_id}/shot_profiles`, 
        // {
        //   body: JSON.stringify(shot_profiles),
        //   method: 'POST',
        //   headers: {
        //     'Accept': 'application/json, text/plain, */*',
        //     'Content-Type': 'application/json'
        //   }
        // })
        .then(createdshot_profile => {
          return createdshot_profile.json()
        })
        .then(jsonedshot_profile => {
          this.setState({
            formInputs: {
              field_goals_made: '',
              field_goals_attempted: '',
              field_goal_percentage: '',
              area: '',
            },
            shot_profile: [jsonedshot_profile, ...this.state.shot_profile]
          })
        })
        .catch(error => console.log(error));
    }

    // handleAdd(event, formInputs) {
    //     console.log('handlethis!')
    //     console.log(formInputs);

    // }

    handleChange(event, formInputs) {
        event.preventDefault()
        console.log(event.target)
        console.log(event.target.value)
        this.setState({
            [this.state.formInputs.name]: event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                    handleChange={this.handleChange}
                    name={'field_goals_made'}
                    placeholder={'FGM'}
                    type={'text'}
                    defaultValue={this.state.field_goals_made}
                    id={'field_goals_made'}
                />
                <Input
                    handleChange={this.handleChange}
                    name={'field_goals_attempted'}
                    placeholder={'FGA'}
                    type={'text'}
                    defaultValue={this.state.field_goals_attempted}
                    id={'field_goals_attempted'}
                />
                <Input
                    handleChange={this.handleChange}
                    name={'field_goal_percentage'}
                    placeholder={'FG%'}
                    type={'text'}
                    defaultValue={this.state.field_goal_percentage}
                    id={'field_goal_percentage'}
                />
                <Input
                    handleChange={this.handleChange}
                    name={'area'}
                    placeholder={'Area'}
                    type={'text'}
                    defaultValue={this.state.area}
                    id={'area'}
                />
                <input type='submit' value="Update shot selection" />
            </form>

        )
    }
}

export default Form