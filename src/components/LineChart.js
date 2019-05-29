import React, { Component } from 'react';
import Chart from 'chart.js'

fetch('/nba_finals')
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log(err))

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
                label: [],
                data: [],
                fill: false,
                lineTension: 0,
            }
        ]
    }

    data.forEach( (team, i) => {
        // team.shot_profiles.forEach 
        let shot_profiles = team.shot_profiles
    console.log(team.shot_profiles)
    chartData.labels.push(team.shot_profiles[i].area)
    chartData.datasets[0].data.push(team.field_goals_made)
// console.log(chartData);
    chartData.datasets[0].data.push(team.field_goals_attempted)
        })
        // console.log(chartData);
        
        return chartData
}

    render() {
        return (
            <>
           
                <h1>2019 NBA Finals</h1>
<canvas id="shot_profile" width="300" height="100"></canvas>
            
            </>
        )
    }
}

export default LineChart;



