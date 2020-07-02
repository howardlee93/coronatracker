import React from 'react';
import MapContainer from './map/map_container' //map/map_container';

import Modal from './modal';



  const asideStyle ={
    position: "fixed", /* Fixed Sidebar (stay in place on scroll) */
    zIndex: '1', /* Stay on top */
    top: '0', /* Stay at the top */
    right: '0',
    overflowX: 'hidden', /* Disable horizontal scroll */
    paddingTop: '8%',
    marginRight:'2%',
    float:'right',
    clear:'right',
    width: '15%',
    height: '90%'
    
  }

const Home = () => (

	<div>
		<header>
		  <h1> Interactive Coronavirus Tracker</h1>
      <h4> Click on a state to see information about its daily cases</h4>      
      <p> This web tool was built with React/ Redux and D3.js. It utilizes <a href='https://covidtracking.com/'> Covid Tracking Project's API.</a> </p>

	   </header>
    <Modal/>

    <MapContainer/>

    <aside style={asideStyle}>
      <h3> About the coronavirus</h3>
      <p>The coronavirus disease 2019 is an infectious disease originating in 
      Wuhan, China. Common symptoms include fever, cough, fatigue, shortness of breath, and loss of smell and taste.
      The time from exposure to onset of symptoms is typically around five days, but may range from two to fourteen days.
      </p>

      <p> The virus is primarily spread between people during close contact, most often via small droplets produced by coughing, sneezing, and talking.
      Recommended measures to prevent infection include frequent hand washing, maintaining physical distance
      from others (especially from those with symptoms), quarantine (especially for those with symptoms), 
      covering coughs, and keeping unwashed hands away from the face.
      </p>

     </aside>



	 <footer>
                <p> Copyright Howard Lee {new Date().getFullYear()}</p>

                <div className="footer-links">
                <a href="https://github.com/howardlee93" >Github</a>
                <a href="https://www.linkedin.com/in/leehoward93/"  >LinkedIn</a>
                <a href="https://howardlee93.github.io/">Portfolio</a>
                </div>

      </footer>
      </div>

);

export default Home;


