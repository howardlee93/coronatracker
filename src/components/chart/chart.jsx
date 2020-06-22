import React, {useState, useRef, useEffect} from 'react';

import *  as d3 from 'd3';

// width={200}
//           height={200}
//           innerRadius={60}
//           outerRadius={100}

const fakeData = [ 1,2,32, 44,5];



const Pie = ({ data, index, createArc, colors, format }) => (
  <g key={index} className="arc">
    <path className="arc" d={createArc(data)} fill={colors(index)} />
    <text
      transform={`translate(${createArc.centroid(data)})`}
      textAnchor="middle"
      alignmentBaseline="middle"
      fill="white"
      fontSize="10"
    >
      {format(data.value)}
    </text>
  </g>
);



const Chart = (props)=> {

	const [hov, setHov] = useState(false);


	useEffect()

	const makePie = d3
		.pie()
		.value(d=> d.value)
		.sort(null)


	const createArc = d3
		.arc()
		.innerRadius(60)
    	.outerRadius(100);

 	const colors = d3.scaleOrdinal(d3.schemeCategory10);
  	const format = d3.format(".2f");
  	const data = makePie(fakeData);//props.data

  	return(
  		<svg width={200} height={200}>
  		<g transform={`translate(${100} ${100})`}>
  			
  			{data.map((d, i) => (

  			<Pie 
  				key={i}
  				data={d}
  				index={i}
  				createArc={createArc}
  				colors={colors}
  				format={format}
  				/>
  			))}
  		</g>
  		</svg>
  		)


};


export default Chart;




