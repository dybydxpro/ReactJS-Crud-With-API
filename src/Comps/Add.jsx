import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Add() {  
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        type: ""
    });

    function handle(e){
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
      }
    
    const createEmployee = async (e) => {
      e.preventDefault();
      await axios.post("https://localhost:44375/api/EmployeeApi", { headers: {'Accept': 'application/json','Content-Type': 'application/json'},
            Name: data.name,
            Type: data.type
        }
      )
      .then(({data})=>{
        console.log(data);
        navigate("/");
      }).catch(({response})=>{
        console.log(response);
      })
    }
  
    return (
        <div className="container">
            <br/>
            <form onSubmit={(e) => createEmployee(e)}>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" onChange={(e) => handle(e)} placeholder="Name" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Type" className="form-label">Type</label>
                    <input type="text" className="form-control" id="type"  onChange={(e) => handle(e)} placeholder="Type" required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
  }

  export default Add;