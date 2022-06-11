import React, { useState } from 'react';


import { Link } from "react-router-dom";
class Navbar extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {answer: null};
    }

    handleSubmit = (event) => {
        console.log(event.target.name)
        console.log(this.state)

        this.setState({ answer: event.target.name });
     
    }

    render(){
        let weatherButton;
        if(this.state.answer === "yes"){
            weatherButton = <Weather />;
        }

        return (
            <div>
                <header className="block">
                <div className="weather">
                    {weatherButton}
                    <button onClick={this.handleSubmit} name="yes">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1z"/></svg>
                    </button>
                    <button onClick={this.handleSubmit} name="no">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                    </button>

                </div>
                    <div className="container headercontainer">
                        <div className="logoblock">
                            <a aria-current="page" className="" href="/"><div>Forwward</div>
                                <div>Design</div></a>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">about</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio">portfolio</Link>
                                </li>
                                <li>
                                    <Link to="/services">services</Link>
                                </li>
                                <li>
                                    <Link to="/contact">contact</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="rightitems">
                            <a href="mailto:info@forwwarddesign.com">info@forwwarddesign.com</a><a href="/contact" className="speakWeather">Speak With Us</a>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
};
export default Navbar;


class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: {
            "data": {
                "timelines": [
                    {
                        "timestep": "1h",
                        "endTime": "2022-06-13T17:00:00Z",
                        "startTime": "2022-06-09T05:00:00Z",
                        "intervals": [
                            {
                                "startTime": "2022-06-09T05:00:00Z",
                                "values": {
                                    "temperature": -47.79
                                }
                            },
                            {
                                "startTime": "2022-06-09T06:00:00Z",
                                "values": {
                                    "temperature": -47.22
                                }
                            },
                            {
                                "startTime": "2022-06-09T07:00:00Z",
                                "values": {
                                    "temperature": -46.99
                                }
                            },
                            {
                                "startTime": "2022-06-09T08:00:00Z",
                                "values": {
                                    "temperature": -46.61
                                }
                            },
                            {
                                "startTime": "2022-06-09T09:00:00Z",
                                "values": {
                                    "temperature": -46.38
                                }
                            },
                            {
                                "startTime": "2022-06-09T10:00:00Z",
                                "values": {
                                    "temperature": -46.03
                                }
                            },
                            {
                                "startTime": "2022-06-09T11:00:00Z",
                                "values": {
                                    "temperature": -46.04
                                }
                            },
                            {
                                "startTime": "2022-06-09T12:00:00Z",
                                "values": {
                                    "temperature": -45.87
                                }
                            },
                            {
                                "startTime": "2022-06-09T13:00:00Z",
                                "values": {
                                    "temperature": -45.77
                                }
                            },
                            {
                                "startTime": "2022-06-09T14:00:00Z",
                                "values": {
                                    "temperature": -45.33
                                }
                            },
                            {
                                "startTime": "2022-06-09T15:00:00Z",
                                "values": {
                                    "temperature": -45.18
                                }
                            },
                            {
                                "startTime": "2022-06-09T16:00:00Z",
                                "values": {
                                    "temperature": -45.69
                                }
                            },
                            {
                                "startTime": "2022-06-09T17:00:00Z",
                                "values": {
                                    "temperature": -45.33
                                }
                            },
                            {
                                "startTime": "2022-06-09T18:00:00Z",
                                "values": {
                                    "temperature": -44.86
                                }
                            },
                            {
                                "startTime": "2022-06-09T19:00:00Z",
                                "values": {
                                    "temperature": -44.58
                                }
                            },
                            {
                                "startTime": "2022-06-09T20:00:00Z",
                                "values": {
                                    "temperature": -44.16
                                }
                            },
                            {
                                "startTime": "2022-06-09T21:00:00Z",
                                "values": {
                                    "temperature": -43.52
                                }
                            },
                            {
                                "startTime": "2022-06-09T22:00:00Z",
                                "values": {
                                    "temperature": -42.76
                                }
                            },
                            {
                                "startTime": "2022-06-09T23:00:00Z",
                                "values": {
                                    "temperature": -42.29
                                }
                            },
                            {
                                "startTime": "2022-06-10T00:00:00Z",
                                "values": {
                                    "temperature": -41.55
                                }
                            },
                            {
                                "startTime": "2022-06-10T01:00:00Z",
                                "values": {
                                    "temperature": -41.38
                                }
                            },
                            {
                                "startTime": "2022-06-10T02:00:00Z",
                                "values": {
                                    "temperature": -41.36
                                }
                            },
                            {
                                "startTime": "2022-06-10T03:00:00Z",
                                "values": {
                                    "temperature": -41.7
                                }
                            },
                            {
                                "startTime": "2022-06-10T04:00:00Z",
                                "values": {
                                    "temperature": -41.92
                                }
                            },
                            {
                                "startTime": "2022-06-10T05:00:00Z",
                                "values": {
                                    "temperature": -41.53
                                }
                            },
                            {
                                "startTime": "2022-06-10T06:00:00Z",
                                "values": {
                                    "temperature": -41.14
                                }
                            },
                            {
                                "startTime": "2022-06-10T07:00:00Z",
                                "values": {
                                    "temperature": -40.23
                                }
                            },
                            {
                                "startTime": "2022-06-10T08:00:00Z",
                                "values": {
                                    "temperature": -39.97
                                }
                            },
                            {
                                "startTime": "2022-06-10T09:00:00Z",
                                "values": {
                                    "temperature": -39.59
                                }
                            },
                            {
                                "startTime": "2022-06-10T10:00:00Z",
                                "values": {
                                    "temperature": -40.17
                                }
                            },
                            {
                                "startTime": "2022-06-10T11:00:00Z",
                                "values": {
                                    "temperature": -39.88
                                }
                            },
                            {
                                "startTime": "2022-06-10T12:00:00Z",
                                "values": {
                                    "temperature": -39.92
                                }
                            },
                            {
                                "startTime": "2022-06-10T13:00:00Z",
                                "values": {
                                    "temperature": -39.79
                                }
                            },
                            {
                                "startTime": "2022-06-10T14:00:00Z",
                                "values": {
                                    "temperature": -40.48
                                }
                            },
                            {
                                "startTime": "2022-06-10T15:00:00Z",
                                "values": {
                                    "temperature": -40.8
                                }
                            },
                            {
                                "startTime": "2022-06-10T16:00:00Z",
                                "values": {
                                    "temperature": -41.17
                                }
                            },
                            {
                                "startTime": "2022-06-10T17:00:00Z",
                                "values": {
                                    "temperature": -41.1
                                }
                            },
                            {
                                "startTime": "2022-06-10T18:00:00Z",
                                "values": {
                                    "temperature": -40.98
                                }
                            },
                            {
                                "startTime": "2022-06-10T19:00:00Z",
                                "values": {
                                    "temperature": -40.19
                                }
                            },
                            {
                                "startTime": "2022-06-10T20:00:00Z",
                                "values": {
                                    "temperature": -40.31
                                }
                            },
                            {
                                "startTime": "2022-06-10T21:00:00Z",
                                "values": {
                                    "temperature": -40.44
                                }
                            },
                            {
                                "startTime": "2022-06-10T22:00:00Z",
                                "values": {
                                    "temperature": -40.88
                                }
                            },
                            {
                                "startTime": "2022-06-10T23:00:00Z",
                                "values": {
                                    "temperature": -41.47
                                }
                            },
                            {
                                "startTime": "2022-06-11T00:00:00Z",
                                "values": {
                                    "temperature": -41.83
                                }
                            },
                            {
                                "startTime": "2022-06-11T01:00:00Z",
                                "values": {
                                    "temperature": -42.2
                                }
                            },
                            {
                                "startTime": "2022-06-11T02:00:00Z",
                                "values": {
                                    "temperature": -42.3
                                }
                            },
                            {
                                "startTime": "2022-06-11T03:00:00Z",
                                "values": {
                                    "temperature": -42.34
                                }
                            },
                            {
                                "startTime": "2022-06-11T04:00:00Z",
                                "values": {
                                    "temperature": -42.22
                                }
                            },
                            {
                                "startTime": "2022-06-11T05:00:00Z",
                                "values": {
                                    "temperature": -42.04
                                }
                            },
                            {
                                "startTime": "2022-06-11T06:00:00Z",
                                "values": {
                                    "temperature": -41.76
                                }
                            },
                            {
                                "startTime": "2022-06-11T07:00:00Z",
                                "values": {
                                    "temperature": -41.49
                                }
                            },
                            {
                                "startTime": "2022-06-11T08:00:00Z",
                                "values": {
                                    "temperature": -41.38
                                }
                            },
                            {
                                "startTime": "2022-06-11T09:00:00Z",
                                "values": {
                                    "temperature": -41.07
                                }
                            },
                            {
                                "startTime": "2022-06-11T10:00:00Z",
                                "values": {
                                    "temperature": -40.96
                                }
                            },
                            {
                                "startTime": "2022-06-11T11:00:00Z",
                                "values": {
                                    "temperature": -41.14
                                }
                            },
                            {
                                "startTime": "2022-06-11T12:00:00Z",
                                "values": {
                                    "temperature": -41.48
                                }
                            },
                            {
                                "startTime": "2022-06-11T13:00:00Z",
                                "values": {
                                    "temperature": -41.64
                                }
                            },
                            {
                                "startTime": "2022-06-11T14:00:00Z",
                                "values": {
                                    "temperature": -41.73
                                }
                            },
                            {
                                "startTime": "2022-06-11T15:00:00Z",
                                "values": {
                                    "temperature": -41.67
                                }
                            },
                            {
                                "startTime": "2022-06-11T16:00:00Z",
                                "values": {
                                    "temperature": -41.53
                                }
                            },
                            {
                                "startTime": "2022-06-11T17:00:00Z",
                                "values": {
                                    "temperature": -41.76
                                }
                            },
                            {
                                "startTime": "2022-06-11T18:00:00Z",
                                "values": {
                                    "temperature": -42.22
                                }
                            },
                            {
                                "startTime": "2022-06-11T19:00:00Z",
                                "values": {
                                    "temperature": -42.46
                                }
                            },
                            {
                                "startTime": "2022-06-11T20:00:00Z",
                                "values": {
                                    "temperature": -42.56
                                }
                            },
                            {
                                "startTime": "2022-06-11T21:00:00Z",
                                "values": {
                                    "temperature": -42.79
                                }
                            },
                            {
                                "startTime": "2022-06-11T22:00:00Z",
                                "values": {
                                    "temperature": -43.13
                                }
                            },
                            {
                                "startTime": "2022-06-11T23:00:00Z",
                                "values": {
                                    "temperature": -43.34
                                }
                            },
                            {
                                "startTime": "2022-06-12T00:00:00Z",
                                "values": {
                                    "temperature": -43.56
                                }
                            },
                            {
                                "startTime": "2022-06-12T01:00:00Z",
                                "values": {
                                    "temperature": -44.02
                                }
                            },
                            {
                                "startTime": "2022-06-12T02:00:00Z",
                                "values": {
                                    "temperature": -44.34
                                }
                            },
                            {
                                "startTime": "2022-06-12T03:00:00Z",
                                "values": {
                                    "temperature": -44.55
                                }
                            },
                            {
                                "startTime": "2022-06-12T04:00:00Z",
                                "values": {
                                    "temperature": -44.69
                                }
                            },
                            {
                                "startTime": "2022-06-12T05:00:00Z",
                                "values": {
                                    "temperature": -44.7
                                }
                            },
                            {
                                "startTime": "2022-06-12T06:00:00Z",
                                "values": {
                                    "temperature": -44.83
                                }
                            },
                            {
                                "startTime": "2022-06-12T07:00:00Z",
                                "values": {
                                    "temperature": -44.74
                                }
                            },
                            {
                                "startTime": "2022-06-12T08:00:00Z",
                                "values": {
                                    "temperature": -44.82
                                }
                            },
                            {
                                "startTime": "2022-06-12T09:00:00Z",
                                "values": {
                                    "temperature": -44.77
                                }
                            },
                            {
                                "startTime": "2022-06-12T10:00:00Z",
                                "values": {
                                    "temperature": -44.85
                                }
                            },
                            {
                                "startTime": "2022-06-12T11:00:00Z",
                                "values": {
                                    "temperature": -44.82
                                }
                            },
                            {
                                "startTime": "2022-06-12T12:00:00Z",
                                "values": {
                                    "temperature": -44.76
                                }
                            },
                            {
                                "startTime": "2022-06-12T13:00:00Z",
                                "values": {
                                    "temperature": -44.92
                                }
                            },
                            {
                                "startTime": "2022-06-12T14:00:00Z",
                                "values": {
                                    "temperature": -45.02
                                }
                            },
                            {
                                "startTime": "2022-06-12T15:00:00Z",
                                "values": {
                                    "temperature": -45.01
                                }
                            },
                            {
                                "startTime": "2022-06-12T16:00:00Z",
                                "values": {
                                    "temperature": -44.37
                                }
                            },
                            {
                                "startTime": "2022-06-12T17:00:00Z",
                                "values": {
                                    "temperature": -44.15
                                }
                            },
                            {
                                "startTime": "2022-06-12T18:00:00Z",
                                "values": {
                                    "temperature": -43.8
                                }
                            },
                            {
                                "startTime": "2022-06-12T19:00:00Z",
                                "values": {
                                    "temperature": -41.71
                                }
                            },
                            {
                                "startTime": "2022-06-12T20:00:00Z",
                                "values": {
                                    "temperature": -41.54
                                }
                            },
                            {
                                "startTime": "2022-06-12T21:00:00Z",
                                "values": {
                                    "temperature": -41.52
                                }
                            },
                            {
                                "startTime": "2022-06-12T22:00:00Z",
                                "values": {
                                    "temperature": -41.6
                                }
                            },
                            {
                                "startTime": "2022-06-12T23:00:00Z",
                                "values": {
                                    "temperature": -41.52
                                }
                            },
                            {
                                "startTime": "2022-06-13T00:00:00Z",
                                "values": {
                                    "temperature": -41.33
                                }
                            },
                            {
                                "startTime": "2022-06-13T01:00:00Z",
                                "values": {
                                    "temperature": -41.07
                                }
                            },
                            {
                                "startTime": "2022-06-13T02:00:00Z",
                                "values": {
                                    "temperature": -40.69
                                }
                            },
                            {
                                "startTime": "2022-06-13T03:00:00Z",
                                "values": {
                                    "temperature": -40.56
                                }
                            },
                            {
                                "startTime": "2022-06-13T04:00:00Z",
                                "values": {
                                    "temperature": -40.57
                                }
                            },
                            {
                                "startTime": "2022-06-13T05:00:00Z",
                                "values": {
                                    "temperature": -40.25
                                }
                            },
                            {
                                "startTime": "2022-06-13T06:00:00Z",
                                "values": {
                                    "temperature": -39.84
                                }
                            },
                            {
                                "startTime": "2022-06-13T07:00:00Z",
                                "values": {
                                    "temperature": -39.73
                                }
                            },
                            {
                                "startTime": "2022-06-13T08:00:00Z",
                                "values": {
                                    "temperature": -39.51
                                }
                            },
                            {
                                "startTime": "2022-06-13T09:00:00Z",
                                "values": {
                                    "temperature": -39.6
                                }
                            },
                            {
                                "startTime": "2022-06-13T10:00:00Z",
                                "values": {
                                    "temperature": -38.5
                                }
                            },
                            {
                                "startTime": "2022-06-13T11:00:00Z",
                                "values": {
                                    "temperature": -38.39
                                }
                            },
                            {
                                "startTime": "2022-06-13T12:00:00Z",
                                "values": {
                                    "temperature": -38.3
                                }
                            },
                            {
                                "startTime": "2022-06-13T13:00:00Z",
                                "values": {
                                    "temperature": -37.81
                                }
                            },
                            {
                                "startTime": "2022-06-13T14:00:00Z",
                                "values": {
                                    "temperature": -37.57
                                }
                            },
                            {
                                "startTime": "2022-06-13T15:00:00Z",
                                "values": {
                                    "temperature": -36.9
                                }
                            },
                            {
                                "startTime": "2022-06-13T16:00:00Z",
                                "values": {
                                    "temperature": -36.82
                                }
                            },
                            {
                                "startTime": "2022-06-13T17:00:00Z",
                                "values": {
                                    "temperature": -36.72
                                }
                            }
                        ]
                    }
                ]
            }
          }
        };
      }
    

    // componentDidMount() {
    //     fetch("https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=aT03ZHjdXxg5OQHPBxooMQgNn6V7o8DD")
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //             console.log(result.data.timelines[0])
    //           this.setState({
    //             isLoaded: true,
    //             items: result.data.timelines[0]
    //           });
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
    //           this.setState({
    //             isLoaded: true,
    //             error
    //           });
    //         }
    //       )
    //   }

    render(){
        const { error, isLoaded, items } = this.state;

        return (
            <ul>
                {items.data.timelines[0].intervals.map(item => (
                    <li key={item.startTime}>
                    {item.startTime} {item.values.temperature}
                    </li>
                ))}
            </ul>
        );
    }  
  }