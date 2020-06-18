import React from 'react';

import *  as d3 from 'd3';




class Chart extends React.Component{
	
	constructor(props){
		super(props);

		this.state = {

		};

	



	}


	render(){
		return(
            <div>
                <h3> Delegate count</h3>
			     <div ref="chart"/>
            </div>
			)
	}


};


export default Chart;
