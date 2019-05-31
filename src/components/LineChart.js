import React, { Component } from 'react';
import Chart from 'chart.js'

// fetch('/nba_finals')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(err => console.log(err))

    // <div className ="header">

    // </div>

class LineChart extends Component {
componentDidMount () {
    this.getData()
}

getData() {
    fetch('/nba_finals')
    .then(response => response.json())
    .then(jData => this.preparedData(jData))  
    .then(data => this.createChart(data))
}

createChart(data) {
    const ctx = document.querySelector('#shot_profile')
    console.log(data);
    const shotChart = new Chart(ctx, {
        type: 'line',
        data: data
    })
}

preparedData (data) {
    console.log(data);
    const chartData = {
        labels: [],
        datasets: [
            {
                label: '',
                data: [],
                fill: false,
                lineTension: 0,

                labels: {
                    fontColor: 'white'
                },
                backgroundColor: "rgba(192, 77,77,.5)",
                borderColor: "yellow",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(192, 77,77,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "blue",
                pointHoverBorderColor: "blue",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                spanGaps: false,
                

            },
            {
                label: '',
                data: [],
                fill: false,
                lineTension: 0,

                backgroundColor: "rgba(192, 77,77,.5)",
            borderColor: "rgb(206,17,65)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(192, 77,77,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: " rgb(117,59,189",
            pointHoverBorderColor: "rgba(white)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            spanGaps: false,
            },
        ],
    }

    
     // START OF LOOP: LABEL
    data.forEach( (team, i) => {
    // TEAM NAME (CHART LABEL)
    chartData.datasets[i].label = team.team

// START OF NESTED LOOP (SHOT PROFILES DATA)
    team.shot_profiles.forEach((shot_profiles, j) => {   
    chartData.labels.push(shot_profiles.area)
// FGM DATA
    
    chartData.datasets[i].data.push(shot_profiles.field_goals_made)

// FGA DATA
    // chartData.datasets[i].data.push(shot_profiles.field_goals_attempted)

// FG% DATA
    // chartData.datasets[i].data.push(shot_profiles.field_goal_percentage)

        })
        })
        
        return chartData
}

    render() {
        return (
            <>
           
        <h1>2019 NBA Finals</h1>
        <h2>Who do you think will win?</h2>
        <h3> Review the 2019 postseason team shot profiles to make your bet</h3>
        <h4> Post Season Field Goals Made </h4>
<canvas id="shot_profile" width="300" height="100"></canvas>

            </>

        )
    }
}

export default LineChart;



