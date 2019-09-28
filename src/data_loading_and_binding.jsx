import React from 'react';
import * as d3 from 'd3';

export class DataLoadingAndBinding extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [1,2,3]
        }

        this.executeD3 = this.executeD3.bind(this)
    }

    componentDidMount() {
        this.executeD3()
    }

    executeD3() {
     d3.select('.example_one')
        .selectAll('whatever') // since whatever doesn't exist, this will return an empty array
        // I don't think that adding this changes anything
        // Question ) Why does it get added then?
        .data(this.state.data)
        .enter() // will take data entered from 'data' and perform operations on them individually
        .append('p')
        .text('This is text 1') // appends a 'p' tag to each piece of data
    
     d3.select('.example_two')
        .selectAll('p')
        .data(this.state.data)
        .enter()
        .append('p')
        .text((d, i) => {return d}) // d is the data point here and i is the index
        .style('color', 'deeppink')
        
    }

    render() {
        return (
            <div>
                <div className="example_one"/>
                <div className="example_two"/>
            </div>
        )
    }
}