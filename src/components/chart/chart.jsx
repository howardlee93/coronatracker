import React, {useState, useRef, useEffect} from 'react';

import *  as d3 from 'd3';


// const dummyData = [{cat: "total", value: 12}, {cat: "dead", value:3}, {cat: "alive", value: 3}];

const dummyData= {"positive":178054,"pending":null, "negative":3233632,"hospitalizedCurrently":4804,"inIcuCurrently":1412};


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


  // const [data, setData] = useState(0);

	// useEffect( ()=>{
//  load data from state 
  // } ,[props])

	const makePie = d3
		.pie()
    .sort(null)

		.value( (d)=>  + d.value)

  //   .text()


	const createArc = d3
		.arc()
		.innerRadius(60)
    .outerRadius(100);

 	const colors = d3.scaleOrdinal(d3.schemeCategory10);
  const format = d3.format(".2f");
  const data = makePie(dummyData);//props.data

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




