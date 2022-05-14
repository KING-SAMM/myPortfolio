import React, { useState } from 'react'

const WatchDimensions = () => {
    let [width, setWidth] = useState(window.innerWidth);
    let [height, setHeight] = useState(window.innerHeight);

    let dynamicWidth = () => setWidth(window.innerWidth)
    let dynamicHeight = () => setHeight(window.innerHeight)


    window.addEventListener('resize', dynamicWidth);
    window.addEventListener('resize', dynamicHeight);

    console.log( "Width is: ", dynamicWidth);
    console.log( "Height is: ", dynamicHeight);
    return (
        <h1 className='text-white text-4xl'>
        { width } by { height }
        </h1>   
    )
}

export default WatchDimensions;