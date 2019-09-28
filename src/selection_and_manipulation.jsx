import React from 'react';
import * as d3 from 'd3';

export class SelectionAndManipulation extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.executeD3()
    }
    executeD3() {
        const title = d3.select('h2').style('color', 'blue')
    
        d3.select('body').append('p').text('I am the first paragraph')
        d3.select('body').append('p').text('I am the second paragraph')
        d3.select('body').append('p').text('I am the third paragraph')

        // Notice how selectAll selects all the elemnts whereas select only selects
        // the first one it sees
        d3.selectAll('p').style('color', 'deeppink').style('font-weight', 'bold')
    }

    render() {
        return (
            <h2>
                Hello world. I am inside of selection and manipulation! ^_^ 
            </h2>
        )
    }
}