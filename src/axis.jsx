// Note : This still needs some fiddling as the y axis is going through the axis 0 point
import React from 'react';
import * as d3 from 'd3';

export class Axis extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [1,2,3,4,5,6,7,8]
        }
        this.executeD3 = this.executeD3.bind(this)
    }

    componentDidMount() {
        this.executeD3()
    }

    executeD3() {
        const chartWidth = 450
        const chartHeight = 500
        
        const svg = d3.select('svg')
          .attr('width', chartWidth)
          .attr('height', chartHeight)
          .style("background-color", 'pink')

        const xScale = d3.scaleLinear()
                        .domain([0, d3.max(this.state.data)])
                        .range([0, chartWidth])

        const yScale = d3.scaleLinear()
                        .domain([d3.max(this.state.data), 0]) // Fliping this inverses the numbers on the axis
                        .range([0, chartHeight])

        const xAxis = d3.axisBottom()
                        .scale(xScale)
        
        const yAxis = d3.axisLeft()
                        .scale(yScale)
        
        svg.append('g')
            .attr('transform', 'translate(50, 0)')
            .call(yAxis)
        
        const xAxisTranslate = chartHeight - 20

        svg.append('g')
            .attr('transform', 'translate(50,' + xAxisTranslate + ')')
            .call(xAxis)
    }

    render() {
        return (
            <svg>
            </svg>
        )
    }
}