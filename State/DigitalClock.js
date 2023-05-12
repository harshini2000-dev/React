import {React,useState} from 'react'


// No HOOKS used. To demo the Problem this program is written.
export default function DigitalClock() {
    let [timer,setTimer] = useState("")

    let id = setInterval(changeClock , 1000);
    console.log(id);

    function changeClock(){
     setTimer(() => new Date().toLocaleTimeString()) // each sec timer is updated
    }
    
  return (
    <>
        <div>DigitalClock</div>
        <h1>{timer}</h1>
        <small>Each time new interval is set. new timer is being created.</small>
    </>
  )
}
