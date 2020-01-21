import React from 'react';
import ReactApexCharts from 'react-apexcharts'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [44, 55, 41, 17, 15],
            options: {
                chart: {
                    type: 'donut',
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },


        };
    }



    render() {
        return (
            <div>
                <h1>Dashboard</h1>

                <div id="chart">
                    <ReactApexCharts options={this.state.options} series={this.state.series} type="donut" />
                </div>
            </div>


        );
    }
}

export default Dashboard;
