import './App.css';
import Checkbox from "./components/Checkbox"
import { useState, useEffect } from 'react';

function App() {

  const [jobsList, setJobsList] = useState([
    {
      id: "FULLTIME",
      job: "Full Time",
      isActive: false
    },
    {
      id: "PARTTIME",
      job: "Part Time",
      isActive: false
    },
    {
      id: "FREELANCER",
      job: "Freelancer",
      isActive: false
    },
    {
      id: "INTERN",
      job: "Intern",
      isActive: false
    }
  ])

  const [selected, setSelected] = useState([])

  const clickCheck = (id, active, event) =>{
    const updatedJobs = jobsList.map((each) =>{
      if(each.id === id){
        return {...each, isActive: !active}
      }
      return each
    })    
    setJobsList(updatedJobs)

    setSelected(updatedJobs.reduce((arr, item) =>{
      if(!item) arr = []
      if(item.isActive === true) arr.push(item.id)
      return arr
    },[]))

    // setSelected(updatedJobs.filter((item) => item.isActive === true))

  }

  useEffect(() =>{
    const url = `https://jobsapi/${selected}`
    console.log(url)
  },[selected])

  return (
    <div className="App">
      <div>
      <ul className="list-container">
        {jobsList.map((each) =>(
          <Checkbox key={each.id} check={each} clickCheck={clickCheck}/>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
