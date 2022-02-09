import React, { useEffect, useState } from "react";  
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

function Edit(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [data, setData] = useState({
        name: "",
        type: ""
    });

    useEffect(()=>{
        axios.get(`https://localhost:44375/api/EmployeeApi/${id}`)
        .then(({data})=>{
          console.log(data);
          setData(data);
        }).catch(({response})=>{
          console.log(response);
        })
    },[])

    function handle(e){
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }

    /*const getEmployee = async (e) => {
        e.preventDefault();
        await axios.get(`https://localhost:44375/api/EmployeeApi/${id}`)
        .then(({data})=>{
          console.log(data);
          setData(data);
        }).catch(({response})=>{
          console.log(response);
        })
    }*/

    const updateEmployee = async (e) => {
        e.preventDefault();
        await axios.put(`https://localhost:44375/api/EmployeeApi`, { headers: {'Accept': 'application/json','Content-Type': 'application/json'},
            Id: data.id,
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


    return(
        <div className="container">
            <br/>
            <form onSubmit={(e) => updateEmployee(e)}>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={ data.name } onChange={(e) => handle(e)} placeholder="Name" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Type" className="form-label">Type</label>
                    <input type="text" className="form-control" id="type" value={ data.type } onChange={(e) => handle(e)} placeholder="Type" required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Edit;