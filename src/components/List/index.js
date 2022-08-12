import React from 'react'
import './index.scss'
import Plane from '../../assets/images/plane.png'
import airplane from '../../assets/images/planenew.png'

const Index = (props) => {
  return (
        <div id = "parent">  


            <h3>Search Results</h3>
            
            <div className='List1'>
            {
                props.foundFlights.map((e)=>{
                    return(
                        <div className="item">
                            <div className="img">
                                <img src={Plane} alt="" />
                            </div>
                            <div>
                                <div id="one">{e.travelduration}</div>
                                <div id="two">{e.travelduration}</div>
                            </div>
                            <div className='subList'>
                                <div className="topHalf">
                                    <div className="left">
                                        <div className='zero'>{e.from}</div>
                                        <div>ORD</div>
                                    </div>
                                    <div className="mid1">
                                        <img src={airplane} alt="" />
                                    </div>
                                    <div className="right">
                                        <div className='zero'>{e.to}</div>
                                        <div>FCO</div>
                                    </div>
                                </div>
                                <div className="bottomHalf">
                                    <div className="left">
                                        <div className='zero'>{e.to}</div>
                                        <div>FCO</div>
                                    </div>
                                    <div className="mid1">
                                        <img src={airplane} alt="" />
                                    </div>
                                    <div className="right">
                                        <div className='zero'>{e.from}</div>
                                        <div>ORD</div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="price">
                                <div className="six">
                                <h3>{e.cost}</h3>
                                <button id='btn2'>View Details</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
  )
}

export default Index