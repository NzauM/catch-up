import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Stdform from './Stdform';

function App() {
  const[students,setStudents] = useState([])
  const[newStd,setnewStd] = useState(true)
  const[childStd,setChildStd] = useState("")
  useEffect(()=>{
    fetch("http://localhost:3000/students")
    .then(r=>r.json())
    .then(resp=>{
      console.log(resp)
      setStudents(resp)
    })
  },[newStd])

  function addStd(stdData){
    console.log("Student detected in App")
    console.log(stdData)
    setnewStd(!newStd)
  }
  // add a state variable that will trigger the fetch function again
  // console.log(students)
  let studentsDisplay = students.map((std)=>{
    return(
      <div>
        <h1>{std.student_name}</h1>
        <p>{std.id_no}</p>
        <p>{std.course}</p>
      </div>
    )
  })

  function handleNameRequest(namefromchild){
    setChildStd(namefromchild)
  }
  return (
    <>
    <h1>Welcome new {childStd}</h1>
      {studentsDisplay}
      <Stdform onAddStudents={addStd} onRequestName={handleNameRequest}/>
    </>
  );
}

export default App;
