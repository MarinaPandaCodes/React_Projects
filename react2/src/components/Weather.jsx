import React from 'react'

const Weather = () => {
  let temp = 26;
  if (temp < 15) {
    return (
      <div>
        <h1>It's cold outside</h1>
      </div>
    )
  } else if (temp >= 15 && temp <= 25) {
    return (
      <div>
        <h1>It's nice outside</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>It's hot outside</h1>
      </div>
    )
    
  }
}

export default Weather
