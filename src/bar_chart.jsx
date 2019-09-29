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
                      .style("background-color", 'lightYellow')

        //////////////////////// SCALING START //////////////////////////////
        const yScale = d3.scaleLinear()
                        .domain([0, d3.max(this.state.data) + 6]) // Takes in any range of data values
                        .range([0, chartHeight])                  // shrinks it or expands it to fit into this one
                        // You then need to apply this to all the 'height' or 'y' related aspects of your graph so it can scale as needed
        //////////////////////// SCALING END //////////////////////////////
        
        const chartBars = svg.selectAll('rect')
                        .data(this.state.data)
                        .enter()
                        .append('rect') // adds a rectangle to each data piece
                        .attr('y', function(d) {
                            return chartHeight - yScale(d)
                        }) // question ) not sure what this does
                        .attr('height', function(d) {
                            return yScale(d)
                        }) // this is the height of each rect. It is the size of the data
                        .attr('width', barWidth - barPadding) // obvious
                        .attr('transform', function(_, i) {
                            let translate = [barWidth * i, 0]
                            return "translate(" + translate + ")"
                        }) // this gives each bar its location within the x axis 
                            // we don't change the y-axis because we want all bars on same line
                        .attr('fill', 'skyBlue')


        //////////////////////// CREATING LABBELS START //////////////////////////////
        const text = svg.selectAll('text')
                        .data(this.state.data)
                        .enter()
                        .append('text') // appending text to each of the data point
                        .attr('y', function(d) {
                            return chartHeight - yScale(d) - 2
                        })
                        .attr('x', function(_, i) {
                            return barWidth * i
                        })
                        .text(function(d) {
                            return d
                        }) // The content of the text is going to be the value of the bars themselves
                        .attr('fill', 'pink')
        //////////////////////// CREATING LABBELS END //////////////////////////////

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