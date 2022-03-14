import React from 'react';


import '../App.js'

export const Card = ({city}) => (

<div className='Card'>
    <div className='MainInfo'>
        <img className='Icon' alt='Icon' src='https://www.clipartmax.com/png/full/24-248259_weather-png-free-download-news-and-weather-icon.png'/>
        <div className='Title'>{city}</div>
        <div className='Decription'> Sunshine</div>
        <div className='Temperature'>20</div>
    </div>
    <div className='Information'>
      <div>Himidity: 15</div>
      <div>Feels like: 19</div>
    </div>
</div>

)