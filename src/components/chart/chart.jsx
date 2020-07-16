import React, {useState, useEffect} from 'react';

import *  as d3 from 'd3';


const Pie = ({data, index, createArc, colors }) => (

  <g key={index} className="arc">
    <path className="arc" d={createArc(data)} fill={colors(index)} />
    <text
      transform={`translate(${createArc.centroid(data)})`}
      textAnchor="middle"
      alignmentBaseline="middle"
      fill="white"
      fontSize="10"
      fontWeight='bold'
    > 
      {data.data.key}:
      {data.value}
      
      </text>
  </g>
);


const Chart = (props)=> {

  const [corona, setCorona] = useState([]);
  const [clickedFlag, setclickedFlag]  = useState(false);


	useEffect(()=>{

      let data = {
      	negative: props.data.negative,
      	positive : props.data.positive
      // "totalTestsViral": props.data.totalTestsViral,

      // "positiveCasesViral": props.data.positiveCasesViral,
    }
    
    setCorona(data);

  } ,[props]);

  const cleanupData = data => {
  
    let obj = Object.keys(data).map(key =>{
      return {key: key, value:data[key]}
    })

    return obj;
  }

	const makePie = d3
		.pie()
    	.value(d => d.value)
    	.sort(null)  


const createArc = d3
		.arc()
		.innerRadius(70)
    .outerRadius(200);

 
const colors = d3.scaleOrdinal(d3.schemeCategory10);
const data = makePie(cleanupData(corona));


  const formatDate = (date)=>{
    let year = date.toString().slice(0,4);
    let month = date.toString().slice(4,6);
    let day = date.toString().slice(6,8);

    return `${month} / ${day} / ${year}`;

  };


  const changeDataSet = () => {
    console.log(data);


    setclickedFlag(!clickedFlag);

    let altDataSet;

    if(!clickedFlag){
        altDataSet = {
        "death": props.data.death,
        "hospitalizedCurrently": props.data.hospitalizedCurrently,
        "recovered": props.data.recovered
      };
      setCorona(altDataSet);

    }else{
      altDataSet = {
        // "totalTestsViral": props.data.totalTestsViral,

        // "positiveCasesViral": props.data.positiveCasesViral,
        negative: props.data.negative,
      	positive : props.data.positive
      };
      setCorona(altDataSet);

    }    
  }


  return(
      <div>
      <h1 style={{color:'white'}}> Test results for {props.data.state} on {formatDate(props.data.date)}</h1>
  		<h2 style={{color:'white'}}> Click on the chart for more details</h2>

      <svg width='400px' height='400px' onClick={changeDataSet}>
  		<g transform={`translate(200 200)`}>


  			{data.map((d, i) => (
  			<Pie 
           
  				key={i}
  				data={d}
  				index={i}
  				createArc={createArc}
  				colors={colors}
  				/>
  			))}
        <legend/>
  		</g>
  		</svg>

      </div>
  )


};


export default Chart;




