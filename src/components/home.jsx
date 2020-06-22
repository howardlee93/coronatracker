import React from 'react';
import MapContainer from './map/map' //map/map_container';

import Map from './map/map';
import DateLookupContainer from './date';
import Chart from './chart/chart';




const Home = () => (
	<div>
		<header>
		  <h1> Interactive Coronavirus Tracker</h1>
	   </header>
    <Chart/>

	 <footer>
       <p>Hi! This web tool was built with React/ Redux and uses Google Sheets.</p>

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




    // <DateLookupContainer/>
    // <Map/>
