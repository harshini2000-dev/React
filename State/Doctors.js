import React, { useState } from 'react'

function AddDoctorComp({addDoctor}) {

    let [doctorsList, setDoctorFunc] = useState({dname : "Druthi",dage : "29", dept: "ENT"}) 
    
    function validateAddDoctors(e){
        e.preventDefault();
        if(doctorsList.dname.trim() == ""){
            alert("Enter Doctor Name");
            return;
        }
        let doctorDetail = doctorsList;
        // add the doctor name by calling the function defined in Doctors Component - main comp
        addDoctor(doctorDetail);  
    } 

    function takeUserInput(e) {
        let name = e.target.name     // name of the element/field
        let value = e.target.value  // value of the field 

        setDoctorFunc( {...doctorsList, [name] : value })
    }
  return (
    <>
        <h2> Registered Doctors </h2>
        <p></p>
        <form onSubmit={validateAddDoctors} className="form-control">
            Name : <input type='text' id='txtName' name = 'dname' value={doctorsList.dname} onChange={takeUserInput}></input>
            &nbsp;
            Department : <select name="dept" id="ddlDept" onChange={takeUserInput}>
                
        <option value="ENT">ENT</option>
        <option value="Cardiac">Cardiac</option>
        <option value="Neuro">Neuro</option>
        <option value="Ortho">Ortho</option>
        <option value="GeneralMedicine">General Medicine</option>
        </select>
         &nbsp;
            Age : <input type='number' id='txtAge' name = 'dage' value= {doctorsList.dage} onChange={takeUserInput} min="22" max="65"></input>
         &nbsp;  
            <button className='btn btn-success'>Add Doctor</button>
        <br/>
        </form>
    </>
  )
}

function DisplayDoctors({dlist}) {

  return (
    <>
    <table className='table table-bordered'>
        <thead className='bg-warning text-black'>
            <th>Doctor Name</th>
            <th>Doctor Age</th>
            <th>Doctor Dept</th>
        </thead>
        <tbody>
            {
            
            dlist.map((d , idx) => 
            <tr key={idx}>
                <td>Dr. {d.dname}</td>
                <td>{d.dage}</td>
                <td>{d.dept}</td>
            </tr>
            )
            }
        </tbody>
    </table>
    </>
  )
}

export default function Doctors() {
    let [doctorsList, setDoctorFunc] = useState([]) // creating an empty list and statechange func

    function addDoctor(doctorDetail){
        let duplicateFound = doctorsList.find((d, idx) => (d.dname === doctorDetail.dname && d.dept === doctorDetail.dept) );
        if (!duplicateFound)
        {setDoctorFunc([...doctorsList,doctorDetail])}
        else{
            alert("Doctor with same name and department already exists")
        }
    } 
  return (
    <>
        <AddDoctorComp addDoctor = {addDoctor} />
        {
            doctorsList.length > 0 ?
            <DisplayDoctors dlist = {doctorsList}/>
            : <h3>No Doctors in the hospital</h3>
        }

    </>
  )
}
