import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [{
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
        }]
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
        console.log(items)
        return (
            <div>
                
                <header className="block">
                <div className="weather">
                    <Button></Button>
                    <ul>
          {items.map(item => (
            <li key={item.timestep}>
              {item.timestep} {item.timestep}
            </li>
          ))}
        </ul>
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
                            <a href="mailto:info@forwwarddesign.com">info@forwwarddesign.com</a><a href="/contact" className="speakbutton">Speak With Us</a>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
};
export default Navbar;


class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 'null',
        };
    }
    render() {
      return (
        <button 
        onClick={() => this.setState({value: 'X'})}
        >
          {this.state.value}
        </button>
      );
    }  
  }