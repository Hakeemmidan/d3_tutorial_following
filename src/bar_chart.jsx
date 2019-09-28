import React from 'react';
import * as d3 from 'd3';

export class BarChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [100,70,40,90,40]
        }

        this.executeD3 = this.executeD3.bind(this)
    }

    componentDidMount() {
        this.executeD3()
    }

    executeD3() {
        const chartWidth = 400
        const chartHeight = 300
        const barPadding = 3

        const barWidth = chartWidth / this.state.data.length

        const svg = d3.select('svg')
                      .attr('width', chartWidth)
                      .attr('height', chartHeight)

        const chart = svg.selectAll('rect')
                        .data(this.state.data)
                        .enter()
                        .append('rect') // adds a rectangle to each data piece
                        .attr('y', function(d) {
                            return chartHeight - d
                        }) // question ) not sure what this does
                        .attr('height', function(d) {
                            return d
                        }) // this is the height of each rect. It is the size of the data
                        .attr('width', barWidth - barPadding) // obvious
                        .attr('transform', function(d, i) {
                            let translate = [barWidth * i, 0]
                            return "translate(" + translate + ")"
                        }) // this gives each bar its location within the x axis 
                            // we don't change the y-axis because we want all bars on same line
                        .attr('fill', 'skyBlue')

    }

    render() {
        return (
            <div>
                <h2>This is a basic bar chart</h2>
                <svg>
                </svg>
            </div>
        )
    }
}