import React, {useState, useRef, useEffect} from 'react';

import *  as d3 from 'd3';


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


  const [corona, setCorona] = useState([]);

	useEffect(()=>{

    setCorona(props.data)
  } ,[props])

	const makePie = d3
		.pie()
    .sort(null)

	const createArc = d3
		.arc()
		.innerRadius(120)
    .outerRadius(200);

 	const colors = d3.scaleOrdinal(d3.schemeCategory10);
  const format = d3.format(".2f");
  const data = makePie(d3.values(corona));//props.data

  	return(
  		<svg width={500} height={500}>
  		<g transform={`translate(${200} ${200})`}>
  			
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




