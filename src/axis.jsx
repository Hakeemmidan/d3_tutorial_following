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
          .attr('width', chartWidth + 40) // These integer addition are giving the axis some breathing space
          .attr('height', chartHeight + 60)
          .style("background-color", 'pink')

        const xScale = d3.scaleLinear()
                        .domain([0, d3.max(this.state.data)])
                        .range([0, chartWidth]) 

        const yScale = d3.scaleLinear()
                        .domain([d3.max(this.state.data), 0]) // Fliping this inverses the numbers on the axis
                        .range([0, chartHeight])

        const xAxis = d3.axisBottom()
                        .scale(xScale) // This expands the axis based on the given scale
        
        const yAxis = d3.axisLeft()
                        .scale(yScale)
        
        svg.append('g')
            .attr('transform', 'translate(25, 20)') // moves yaxis 25 points to right and 20 down
            .call(yAxis)
        
        const xAxisTranslate = chartHeight +20  // This is saying that we are going to go down from
                                                // top of page 'chartHeight - 20' points
                                                // keep in mind that the chart height does not define
                                                // the limits of this iamge as we have added some constants to it

        svg.append('g')
            .attr('transform', 'translate(25,' + xAxisTranslate + ')') 
            .call(xAxis)
    }

    render() {
        return (
            <svg>
            </svg>
        )
    }
}