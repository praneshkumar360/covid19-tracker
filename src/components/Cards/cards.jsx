import React from 'react'
import CountUp from 'react-countup'

const cards = ({ data : {confirmed,recovered,deaths,lastUpdate} }) => {
    if(!confirmed) {
        return (
            <div>
                <div className="spinner-grow text-primary"></div>
                <div className="spinner-grow text-success"></div>
                <div className="spinner-grow text-danger"></div>
            </div>
            
        )
    }
    return (
        <div className="container">
            <div className="card-deck mt-3" >
                <div className="card" >
                    <h4 className="card-header">Infected</h4>
                    <div className="card-body">
                        <h5>
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration={2}
                                separator=","
                            />
                        </h5>
                        <h5><small>Number of active cases of COVID-19</small></h5>
                    </div>
                    <div className="card-footer bg-primary text-white"><small>Last updated : {new Date(lastUpdate).toDateString()}</small></div>
                </div>
                <div className="card">
                    <h4 className="card-header">Recovered</h4>
                    <div className="card-body">
                        <h5>
                            <CountUp 
                                start={0}
                                end={recovered.value}
                                duration={2}
                                separator=","
                            />
                        </h5>
                        <h5><small>Number of recoveries of COVID-19</small></h5>
                    </div>
                    <div className="card-footer bg-success text-white"><small>Last updated : {new Date(lastUpdate).toDateString()}</small></div>
                </div>
                <div className="card">
                    <h4 className="card-header">Deaths</h4>
                    <div className="card-body">
                        <h5>
                            <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={2}
                                separator=","
                            />
                        </h5>
                        <h5><small>Number of deaths caused by of COVID-19</small></h5>
                    </div>
                    <div className="card-footer bg-danger text-white"><small>Last updated : {new Date(lastUpdate).toDateString()}</small></div>
                </div>
            </div>
        </div>
    )
}

export default cards;