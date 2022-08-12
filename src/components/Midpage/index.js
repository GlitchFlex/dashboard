import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import transferIcon from '../../assets/images/swap.png';
import 'mapbox-gl/dist/mapbox-gl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Map from 'react-map-gl'
import { faArrowRight, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import List from '../List';
import {
    Container,
    Box,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Stack,
    HStack,
    VStack,
    
} from '@chakra-ui/react';
// import Form from "../Form"\
import flightData from '../../mockData'


import './index.scss';
function Index() {
    const [foundFlights, setFoundFlights] = useState([]);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const [departureDate, setDepartureDate] = useState('');

    const submitHandler = ()=>{
        console.log("clicked");
        let newArray=flightData.filter((e)=>{return e.from===from && e.to===to && e.departure===departureDate && e.arrival===arrivalDate})
        setFoundFlights(newArray);
    }
    console.log(foundFlights);
    

    return (
        <>
            <div className="top">
                <nav id="navBar">
                    <ul>
                        <NavLink
                            exact="true"
                            activeclassname="active"
                            className="Link"
                            to="/"
                        >
                            Flights
                        </NavLink>
                        <NavLink
                            exact="true"
                            activeclassname="active"
                            className="Link"
                            to="/"
                        >
                            Hotels
                        </NavLink>
                        <NavLink
                            exact="true"
                            activeclassname="active1"
                            className="Link"
                            to="/"
                        >
                            Car Hire
                        </NavLink>
                    </ul>
                </nav>
                <Container maxW="xl" centerContent>
                    <div className="mid">
                        <Box
                            d="flex"
                            justifyContent="center"
                            alignItems="center"
                            p={3}
                            bg="whiteAlpha.000"
                            w="800px"
                            h="170px"
                            m="20px 0 50px 0"
                            borderRadius="lg"
                        >
                            <Tabs>
                                <TabList
                                    d="flex"
                                    justifyContent={'space-evenly'}
                                >
                                    <Tab w="33%">
                                        <Text
                                            textAlign={'center'}
                                            fontSize="15px"
                                            color="#fff"
                                        >
                                            Return
                                        </Text>
                                    </Tab>
                                    <Tab w="33%">
                                        <Text
                                            textAlign={'center'}
                                            fontSize="15px"
                                            color="#fff"
                                        >
                                            One Way
                                        </Text>
                                    </Tab>
                                    <Tab w="33%">
                                        <Text
                                            textAlign={'center'}
                                            fontSize="15px"
                                            color="#fff"
                                        >
                                            Multi City
                                        </Text>
                                    </Tab>
                                </TabList>

                                <TabPanels d="flex" justifyContent={'center'}>
                                    <TabPanel>
                                        <div className="form">
                                        <div className="place">
                                            <div className="from">
                                                <p>from</p>
                                                <input
                                                    type="text"
                                                    placeholder="Chicago"
                                                    onChange={(e) => {
                                                        setFrom(e.target.value);
                                                    }}
                                                />
                                            </div>
                                            <div className="icon">
                                                <img
                                                    src={transferIcon}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="to">
                                                <p>to</p>
                                                <input
                                                    type="text"
                                                    placeholder="Rome"
                                                    onChange={(e) => {
                                                        setTo(e.target.value);
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="date">
                                            <p>choose the date</p>
                                            <div className="dateDiv">
                                                <div className="dateInput">
                                                <input
                                                type="text"
                                                placeholder="yyyy-mm-dd"
                                                onChange={(e) => {
                                                    setArrivalDate(
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                            <input
                                                type="text"
                                                placeholder="yyyy-mm-dd"
                                                onChange={(e) => {
                                                    setDepartureDate(
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                            </div>
                                            <button className = 'btnx' onClick={submitHandler}>
                                            <span id="btnText">Search</span>
                                            <FontAwesomeIcon icon={faArrowRightLong} className="fa-xl" color="#fff" />
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <h1>Second</h1>
                                    </TabPanel>
                                    <TabPanel>
                                        <h1>Third</h1>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Box>
                    </div>
                </Container>
            <List foundFlights={foundFlights}/>
            </div>
        </>
    );
}

export default Index;
