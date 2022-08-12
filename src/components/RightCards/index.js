import React from 'react'
import './index.scss'
import 'mapbox-gl/dist/mapbox-gl.css'
import gear from "../../assets/images/gear.png"
import Map from 'react-map-gl'

import { Progress } from '@chakra-ui/react'
// import dp from '../../assets/images/dp1.avif'
function Index() {
    let name = "Jenner Lucy"
    let percentage = 48;
  return (
    <div className='leftFlex'>
        <div id="first">
          
            <div className="round-image"></div>
            <h3>{name}</h3>
            <div id="profile">
                <h5>Set up profile</h5>
                <h5>{percentage}% left</h5>
            </div>
            <div>
            <Progress colorScheme='green' size='sm' value={percentage} />
            </div>
            <button id="btn1">Lets start</button>

        </div>
        <div className = "three">
            <h3>Covid 19 map</h3>
            <button>Explore</button>
        </div>
        <div id = "second">
          <Map
          mapboxAccessToken='pk.eyJ1IjoicHJhdHl1Z25hIiwiYSI6ImNsNnBnNm1sdDAwZDkzam15NHo2ZXcxdXEifQ.NIGHSjCviyIYaQbS1DRsog'
          style = {
            {
              width:"250px",
              height:"250px",
              borderRadius:"10px"
            }
          }
          initialViewState={{
            longitude : 54.3758,
            latitude  :24.45677
          }}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          />
        </div>
    </div>
  )
}

export default Index