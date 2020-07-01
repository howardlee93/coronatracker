import React, {useState, useRef, useEffect} from 'react';

import *  as d3 from 'd3';


const dummyData = {"date":20200626,"state":"CA","positive":200461,"negative":3570853,"pending":null,
"hospitalizedCurrently":5639,"hospitalizedCumulative":null,
"inIcuCurrently":1570,"inIcuCumulative":null,
"onVentilatorCurrently":null,
"onVentilatorCumulative":null,"recovered":null,"dataQualityGrade":"B","lastUpdateEt":"6/26/2020 00:00",
"dateModified":"2020-06-26T00:00:00Z","checkTimeEt":"06/25 20:00","death":5812,"hospitalized":null,
"dateChecked":"2020-06-26T00:00:00Z","totalTestsViral":3771314,"positiveTestsViral":null,"negativeTestsViral":null,
"positiveCasesViral":200461,"fips":"06","positiveIncrease":4890,"negativeIncrease":72079,"total":3771314,
"totalTestResults":3771314,"totalTestResultsIncrease":76969,"posNeg":3771314,"deathIncrease":79,
"hospitalizedIncrease":0,"hash":"cd112266f42d3f0247396332d43f881e67a91f10","commercialScore":0,"negativeRegularScore":0,
"negativeScore":0,"positiveScore":0,"score":0,"grade":""}


//totalTestResults

//positiveCasesViral

//deaths
// hospitalizedCurrently




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

  const [corona, setCorona] = useState([]);

	useEffect(()=>{

      let data = {

      // totalTestResults: props.data.totalTestResults,

      // positiveCasesViral: props.data.positiveCasesViral,

      death: props.data.death,

      hospitalizedCurrently: props.data.hospitalizedCurrently,
      recovered: props.data.recovered
    }
    

    setCorona(data);

  } ,[props])

	const makePie = d3
		.pie()
    .sort(null)  

	const createArc = d3
		.arc()
		.innerRadius(120)
    .outerRadius(200);

//ylabels suck

  // const label = d3.group("arc")
  //   .append('text')
  //   .text(d3.keys(corona))
  //   .attr("text-anchor", "middle")
  //   .attr("fill", "#888")
  //   .style("visibility", "hidden");

  // label
  //   .append("tspan")
  //   .attr("class", "percentage")
  //   .attr("x", 0)
  //   .attr("y", 0)
  //   .attr("dy", "-0.1em")
  //   .attr("font-size", "3em")
  //   .text("");

  // label
  //   .append("tspan")
  //   .attr("x", 0)
  //   .attr("y", 0)
  //   .attr("dy", "1.5em")
  //   .text("of visits begin with this sequence");



 	const colors = d3.scaleOrdinal(d3.schemeCategory10);
  const format = d3.format(".2f");
  const data = makePie(d3.values(corona));//props.data

  

  const formatDate = (date)=>{
    let year = date.toString().slice(0,4);
    let month = date.toString().slice(4,6);
    let day = date.toString().slice(6,8);

    return `${month} / ${day} / ${year}`;


  };


  const changeDataSet = () => {

    alert("the click works lol")

  }
  

  	return(
      <div>
      <h1 style={{color:'white'}}> Test results for {props.data.state} on {formatDate(props.data.date)}</h1>
  		<svg width={400} height={450} onClick={changeDataSet}>
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

      </div>
  		)


};


export default Chart;




