import React from 'react';
import * as d3 from 'd3';

export class SvgPractice extends React.Component {
    constructor(props) {
        super(props)
        this.executeD3 = this.executeD3.bind(this)
    }

    componentDidMount() {
        this.executeD3()
    }

    executeD3() {
        const chartWidth = 500
        const chartHeight = 300 
        const svg = d3.select('svg')
                      .attr('width', chartWidth)
                      .attr('height', chartHeight)
                      .style('background-color', 'wheat')

        svg.append('line')
           .attr('x1', 65 )
           .attr('x2', 90 )
           .attr('y1', 90 )
           .attr('y2', 60)
           .attr('stroke', 'brown')
           .attr('stroke-width', 10) // This is essentially how you create a line using d3
            // Remember that d3 starts at the top left of the page

        svg.append('line')
            .attr('x1', chartWidth - 133 )
            .attr('x2', chartWidth - 153 )
            .attr('y1', 90 )
            .attr('y2', 60)
            .attr('stroke', 'brown')
            .attr('stroke-width', 10)

        svg.append('rect')
           .attr('x', chartWidth / 2 - 70)
           .attr('y', 120)
           .attr('height', 70)
           .attr('width', 70)

        svg.append('circle')
            .attr('cx', 100)
            .attr('cy', 100)
            .attr('r', 10)
        
        svg.append('circle')
            .attr('cx', chartWidth - 100 - 70)
            .attr('cy', 100)
            .attr('r', 10)

        svg.append('arc')
            .attr('x1', 100)
            .attr('x2', 200)
            .attr('y1', 100)
            .attr('y2', 50)


        // Arc inspired by : https://stackoverflow.com/a/12077998
        var arc = d3.arc()
            .innerRadius(80)
            .outerRadius(90)
            .startAngle(65 * (Math.PI/70)) // positive number move clockwise
            .endAngle(4)

        svg.append('path')
            .attr('d', arc)
            .attr('transform', 'translate(170,150)')

    }

    render() {
        return (
            <svg>
            </svg>
        )
    }
}