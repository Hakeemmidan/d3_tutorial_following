import React from 'react';
import * as d3 from 'd3';

export class PieChart extends React.Component {
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
        const chartWidth = 500
        const chartHeight = 300

        const svg = d3.select('svg')
                      .attr('width', chartWidth)
                      .attr('height', chartHeight)
                      .style('background-color', 'pink')
        const radius = Math.min(chartHeight, chartWidth) / 2


        const g = svg.append('g')
                     .attr('transform', 'translate(' + radius + ',' + radius + ')') // moving the pie down and to the right to fit chart borders

        const color = d3.scaleOrdinal(d3.schemeCategory10) // This is just giving a certain color scheme to our pie

        
        const pie = d3.pie().value(function(d) {
            return d.percentage // This represents the values in percentage
        })

        const path = d3.arc()
                       .outerRadius(radius)
                       .innerRadius(0) // We have this set to zero b/c we want this to
                                       // look like a slice of pizza not an arc (no inner radius)

        const arc = g.selectAll('arc')
                     .data(pie(this.state.data))
                     .enter()
                     .append('g')

        arc.append('path')
            .attr('d', path)
            .attr('fill', function(d) {
                return color(d.data.percentage)
            })
    }

    render() {
        return (
            <svg>
            </svg>
        )
    }
}