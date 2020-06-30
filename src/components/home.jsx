import React from 'react';
import MapContainer from './map/map_container' //map/map_container';

import DateLookupContainer from './date';
import Modal from './modal';


const Home = () => (
	<div>
		<header>
		  <h1> Interactive Coronavirus Tracker</h1>
	   </header>
    <Modal/>

    <MapContainer/>

	 <footer>
       <p>Hi! This web tool was built with React/ Redux and utilizes <a href='https://covidtracking.com/'> Covid Tracking Project's API.</a> </p>

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


