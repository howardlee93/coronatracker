import React, {useState, useEffect} from 'react';

import {RadialChart, Hint} from 'react-vis';

const Chart = (props)=> {

  const [corona, setCorona] = useState([]);
  const [clickedFlag, setclickedFlag]  = useState(false);
  const [label, setLabel] =  useState(false);


	useEffect(()=>{

      let data = {
      	"negative": props.data.negative,
      	"positive": props.data.positive,
        // totalTestsViral: props.data.totalTestsViral,

        // positiveCasesViral: props.data.positiveCasesViral,
    };

    
    setCorona(data);

  } ,[props]);

  const cleanupData = data => {
  
    let obj = Object.keys(data).map(key =>{
      return {key: key, value:data[key]}
    })

    return obj;
  }

  const formatDate = (date)=>{
    let year = date.toString().slice(0,4);
    let month = date.toString().slice(4,6);
    let day = date.toString().slice(6,8);

    return `${month} / ${day} / ${year}`;

  };


  const changeDataSet = () => {

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

        "negative": props.data.negative,
      	"positive" : props.data.positive
      };
      console.log(clickedFlag);

      setCorona(altDataSet);

    }    
  }

  return(
      <div>
      <h1 style={{color:'white'}}> Test results for {props.data.state} on {formatDate(props.data.date)}</h1>
  		<h2 style={{color:'white'}}> Click on the chart for more details</h2>
      
        <RadialChart
          innerRadius={70}
          radius={200}
          getAngle={d => d.value}
          data={cleanupData(corona)}
          width={500}
          height={500}
          labelsAboveChildren={true}
          labelsStyle={{fontSize: 16, fill: '#0A0301', fontWeight:'bold'}}
          onValueMouseOver={ elem => setLabel(elem)}
          onSeriesClick={changeDataSet}

        >
          <Hint value={label}>
          <div style={{background: 'white'}}>
            <p>{label.key}</p>
            <p>{label.value}</p>
          </div>
          </Hint>
        </RadialChart>

      </div>
  )

};


export default Chart;




