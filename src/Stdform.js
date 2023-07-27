import { useEffect, useState } from "react";

function Stdform({onAddStudents, onRequestName}) {
    const[userData, setUserData] = useState({"age": 5,"gender": "Female"})
    let newStudent = "Christine"
    useEffect(()=>{
        onRequestName(userData.student_name)
    },[userData])
    const handleInput = (e) =>{
        // let userInput = e.target.value
        let {name, value} = e.target
        // console.log(stdname,value)
        console.log({[name]:value})
        setUserData({...userData,[name]:value})

        // "student_name": "Mercy Nzau",

    }

    const handleFormSubmit = (e) =>{
        e.preventDefault()
        console.log(userData)
        fetch("http://localhost:3000/students",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(r=>console.log(r))
        onAddStudents(userData)
        // .then(data=>console.log(data))
    }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" name="student_name" onChange={handleInput}/>
        </label>
        <label>
          Id No:
          <input type="text" name="id_no" onChange={handleInput}/>
        </label>
        <label>
          Course:
          <input type="text" name="course" onChange={handleInput}/>
        </label> 
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Stdform;
