import {React,useState} from 'react'


// No useEffect hook is used in this. To demo a Problem, this program is written.
export default function DigitalClock() {
    let [timer,setTimer] = useState("")

    let id = setInterval(changeClock , 1000);
    console.log(id);

    function changeClock(){
     setTimer(() => new Date().toLocaleTimeString()) // each sec timer is updated
    }
    
  return (
    <>
        <h1>DigitalClock</h1>
        <h1>{timer}</h1>
        <small>Each time new interval is set. new timer is being created.<br/>
        You can check in console.log. This is the problem. for this useEffect is needed.
        Shown in DigitalClock_hook.js
       </small>
    </>
  )
}
