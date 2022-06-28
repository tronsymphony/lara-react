import React from "react";

const Weather = ({ show, onClose, children }) => {



    const items = {
        "timelines": [
            {
                "timestep": "1h",
                "endTime": "2022-06-12T02:00:00-04:00",
                "startTime": "2022-06-11T02:00:00-04:00",
                "intervals": [
                    {
                        "startTime": "2022-06-11T02:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 1,
                            "humidity": 92,
                            "mepHealthConcern": 1,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-10T12:53:00Z",
                            "sunsetTime": "2022-06-11T02:53:00Z",
                            "temperature": 63.5,
                            "uvIndex": 0,
                            "weatherCode": 1001,
                            "windDirection": 265.5,
                            "windGust": 6.01,
                            "windSpeed": 2.94
                        }
                    },
                    {
                        "startTime": "2022-06-11T03:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 1,
                            "humidity": 98.26,
                            "mepHealthConcern": 0,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 63,
                            "uvIndex": 0,
                            "weatherCode": 2100,
                            "windDirection": 200.44,
                            "windGust": 2.61,
                            "windSpeed": 2
                        }
                    },
                    {
                        "startTime": "2022-06-11T04:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 1,
                            "humidity": 100,
                            "mepHealthConcern": 0,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 63.07,
                            "uvIndex": 0,
                            "weatherCode": 2000,
                            "windDirection": 109.99,
                            "windGust": 2.31,
                            "windSpeed": 1.67
                        }
                    },
                    {
                        "startTime": "2022-06-11T05:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 1,
                            "humidity": 98.48,
                            "mepHealthConcern": 0,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 63.08,
                            "uvIndex": 0,
                            "weatherCode": 2100,
                            "windDirection": 84.24,
                            "windGust": 3.2,
                            "windSpeed": 2.4
                        }
                    },
                    {
                        "startTime": "2022-06-11T06:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 1,
                            "humidity": 93.91,
                            "mepHealthConcern": 0,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 63.5,
                            "uvIndex": 0,
                            "weatherCode": 1001,
                            "windDirection": 74.6,
                            "windGust": 4.09,
                            "windSpeed": 0.35
                        }
                    },
                    {
                        "startTime": "2022-06-11T07:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 1,
                            "humidity": 93.84,
                            "mepHealthConcern": 0,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 63.33,
                            "uvIndex": 0,
                            "weatherCode": 1001,
                            "windDirection": 268.7,
                            "windGust": 3.05,
                            "windSpeed": 1.39
                        }
                    },
                    {
                        "startTime": "2022-06-11T08:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 1,
                            "humidity": 93.83,
                            "mepHealthConcern": 1,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 62.79,
                            "uvIndex": 0,
                            "weatherCode": 1101,
                            "windDirection": 205.44,
                            "windGust": 3.35,
                            "windSpeed": 2.37
                        }
                    },
                    {
                        "startTime": "2022-06-11T09:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 2,
                            "humidity": 93.94,
                            "mepHealthConcern": 1,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 61.42,
                            "uvIndex": 0,
                            "weatherCode": 1102,
                            "windDirection": 234.26,
                            "windGust": 2.11,
                            "windSpeed": 1.77
                        }
                    },
                    {
                        "startTime": "2022-06-11T10:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 2,
                            "humidity": 93.8,
                            "mepHealthConcern": 1,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 63.22,
                            "uvIndex": 0,
                            "weatherCode": 1001,
                            "windDirection": 243.7,
                            "windGust": 2.63,
                            "windSpeed": 1.89
                        }
                    },
                    {
                        "startTime": "2022-06-11T11:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 1,
                            "humidity": 89.34,
                            "mepHealthConcern": 0,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 65.09,
                            "uvIndex": 1,
                            "weatherCode": 1001,
                            "windDirection": 252.26,
                            "windGust": 2.65,
                            "windSpeed": 2.53
                        }
                    },
                    {
                        "startTime": "2022-06-11T12:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 1,
                            "humidity": 91.97,
                            "mepHealthConcern": 0,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 65.14,
                            "uvIndex": 3,
                            "weatherCode": 1001,
                            "windDirection": 251.4,
                            "windGust": 4.5,
                            "windSpeed": 4.16
                        }
                    },
                    {
                        "startTime": "2022-06-11T13:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 2,
                            "humidity": 93.06,
                            "mepHealthConcern": 0,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 65.33,
                            "uvIndex": 5,
                            "weatherCode": 2100,
                            "windDirection": 249.36,
                            "windGust": 6.29,
                            "windSpeed": 5.57
                        }
                    },
                    {
                        "startTime": "2022-06-11T14:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 3,
                            "humidity": 87.63,
                            "mepHealthConcern": 1,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 66.89,
                            "uvIndex": 7,
                            "weatherCode": 1001,
                            "windDirection": 247.68,
                            "windGust": 8.22,
                            "windSpeed": 7.08
                        }
                    },
                    {
                        "startTime": "2022-06-11T15:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 4,
                            "humidity": 85.6,
                            "mepHealthConcern": 1,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 68.28,
                            "uvIndex": 8,
                            "weatherCode": 1001,
                            "windDirection": 250.45,
                            "windGust": 10.12,
                            "windSpeed": 8.3
                        }
                    },
                    {
                        "startTime": "2022-06-11T16:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 4,
                            "humidity": 94.05,
                            "mepHealthConcern": 1,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 67.06,
                            "uvIndex": 9,
                            "weatherCode": 2100,
                            "windDirection": 252.85,
                            "windGust": 15.27,
                            "windSpeed": 10.85
                        }
                    },
                    {
                        "startTime": "2022-06-11T17:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 4,
                            "humidity": 91.04,
                            "mepHealthConcern": 1,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 67.03,
                            "uvIndex": 8,
                            "weatherCode": 1001,
                            "windDirection": 252.76,
                            "windGust": 17.5,
                            "windSpeed": 12.45
                        }
                    },
                    {
                        "startTime": "2022-06-11T18:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 3,
                            "humidity": 92.23,
                            "mepHealthConcern": 1,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 65.39,
                            "uvIndex": 6,
                            "weatherCode": 1001,
                            "windDirection": 248.05,
                            "windGust": 14.11,
                            "windSpeed": 10.4
                        }
                    },
                    {
                        "startTime": "2022-06-11T19:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 3,
                            "humidity": 91.36,
                            "mepHealthConcern": 0,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 65.04,
                            "uvIndex": 4,
                            "weatherCode": 1001,
                            "windDirection": 249.26,
                            "windGust": 13.95,
                            "windSpeed": 10.39
                        }
                    },
                    {
                        "startTime": "2022-06-11T20:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 3,
                            "humidity": 86.26,
                            "mepHealthConcern": 0,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 64.77,
                            "uvIndex": 2,
                            "weatherCode": 1001,
                            "windDirection": 251.69,
                            "windGust": 13.86,
                            "windSpeed": 10.39
                        }
                    },
                    {
                        "startTime": "2022-06-11T21:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 2,
                            "humidity": 72.19,
                            "mepHealthConcern": 0,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 69.72,
                            "uvIndex": 0,
                            "weatherCode": 1000,
                            "windDirection": 233.51,
                            "windGust": 21.73,
                            "windSpeed": 12.18
                        }
                    },
                    {
                        "startTime": "2022-06-11T22:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 1,
                            "humidity": 79.82,
                            "mepHealthConcern": 0,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 67.52,
                            "uvIndex": 0,
                            "weatherCode": 1000,
                            "windDirection": 231.06,
                            "windGust": 17.4,
                            "windSpeed": 9.71
                        }
                    },
                    {
                        "startTime": "2022-06-11T23:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 1,
                            "humidity": 83.82,
                            "mepHealthConcern": 0,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 66.25,
                            "uvIndex": 0,
                            "weatherCode": 1000,
                            "windDirection": 231,
                            "windGust": 11.13,
                            "windSpeed": 6.01
                        }
                    },
                    {
                        "startTime": "2022-06-12T00:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 1,
                            "humidity": 85.36,
                            "mepHealthConcern": 0,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 65.86,
                            "uvIndex": 0,
                            "weatherCode": 1000,
                            "windDirection": 220.17,
                            "windGust": 7.18,
                            "windSpeed": 3.46
                        }
                    },
                    {
                        "startTime": "2022-06-12T01:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 1,
                            "humidity": 85.55,
                            "mepHealthConcern": 0,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 65.74,
                            "uvIndex": 0,
                            "weatherCode": 1000,
                            "windDirection": 182.91,
                            "windGust": 3.4,
                            "windSpeed": 0.96
                        }
                    },
                    {
                        "startTime": "2022-06-12T02:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 1,
                            "humidity": 86.01,
                            "mepHealthConcern": 0,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 65.44,
                            "uvIndex": 0,
                            "weatherCode": 1000,
                            "windDirection": 32.07,
                            "windGust": 3.09,
                            "windSpeed": 1.2
                        }
                    }
                ]
            },
            {
                "timestep": "1d",
                "endTime": "2022-06-11T09:00:00-04:00",
                "startTime": "2022-06-10T09:00:00-04:00",
                "intervals": [
                    {
                        "startTime": "2022-06-10T09:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 3,
                            "humidity": 100,
                            "mepHealthConcern": 3,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-10T12:53:00Z",
                            "sunsetTime": "2022-06-11T02:53:00Z",
                            "temperature": 71.6,
                            "uvIndex": 9,
                            "weatherCode": 1001,
                            "windDirection": 230.44,
                            "windGust": 12.02,
                            "windSpeed": 8.06
                        }
                    },
                    {
                        "startTime": "2022-06-11T09:00:00-04:00",
                        "values": {
                            "epaHealthConcern": 4,
                            "humidity": 94.05,
                            "mepHealthConcern": 1,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-11T12:53:00Z",
                            "sunsetTime": "2022-06-12T02:53:00Z",
                            "temperature": 69.72,
                            "uvIndex": 9,
                            "weatherCode": 1001,
                            "windDirection": 228.25,
                            "windGust": 21.73,
                            "windSpeed": 12.45
                        }
                    }
                ]
            },
            {
                "timestep": "current",
                "endTime": "2022-06-11T02:02:00-04:00",
                "startTime": "2022-06-11T02:02:00-04:00",
                "intervals": [
                    {
                        "startTime": "2022-06-11T02:02:00-04:00",
                        "values": {
                            "epaHealthConcern": 1,
                            "humidity": 92,
                            "mepHealthConcern": 1,
                            "moonPhase": 3,
                            "precipitationIntensity": 0,
                            "precipitationType": 0,
                            "sunriseTime": "2022-06-10T12:53:00Z",
                            "sunsetTime": "2022-06-11T02:53:00Z",
                            "temperature": 63.5,
                            "uvIndex": 0,
                            "weatherCode": 1001,
                            "windDirection": 265.5,
                            "windGust": 6.01,
                            "windSpeed": 2.94
                        }
                    }
                ]
            }
        ],
        "warnings": [
            {
                "code": 246009,
                "type": "Missing Time Range",
                "message": "The timestep is not supported in full for the time range requested.",
                "meta": {
                    "from": "-6h",
                    "to": "+6h",
                    "timestep": "current"
                }
            }
        ]
    }


    if (!show) {
        return null;
    }

    return (
        <>

            <ul>
                {items.timelines[0].intervals.map(item => (
                    <li key={item.startTime}>
                        <span>Start Time: {item.startTime} </span>
                        <span>Temperature: {item.values.temperature}°F</span>
                        <span>Wind Direction: {item.values.windDirection}</span>
                        <span>Wind Speed: {item.values.windSpeed}<small>mph</small></span>
                        <span>Moon Phase: {
                            {
                                '0': 'New',
                                '1': 'Waxing Crescent',
                                '2': 'First Quarter',
                                '3': 'Waxing Gibbous',
                                '4': 'Full',
                                '5': 'Waning Gibbous',
                                '6': 'Third Quarter',
                                '7': 'Waning Crescent',
                            }[item.values.moonPhase]
                        }</span>
                    </li>
                ))}
            </ul>
            <button onClick={onClose}
            >Close
            </button>
        </>
    );
};

export default Weather;
