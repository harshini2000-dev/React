import React, { useEffect, useState } from 'react'

export default function DigitalClock_hook() {
    let [timer,setTimer] = useState("");

    useEffect(
        () => {
        let id = setInterval(changeClock, 1000);
        console.log(id);

        return() => {
            clearInterval(id)
            console.log('clear')
        };

        },[]
    )

    function changeClock(){
        // change the timer state.
        setTimer(new Date().toLocaleTimeString());
    }
    return (
        <>
            <h1>DigitalClock</h1>
            <h1>{timer}</h1>
        </>
      )
}
