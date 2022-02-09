import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Home(){
    const [data, setData] = useState([])

    useEffect(()=>{
        fetchEmployee() 
    },[])

    const fetchEmployee = async () => {
        await axios.get('https://localhost:44375/api/EmployeeApi').then(({data})=>{
            setData(data)
        })
    }

    const deleteEmployee = async (id) => {
        await axios.delete(`https://localhost:44375/api/EmployeeApi/${id}`).then(({data})=>{
            console.log(data);
            fetchEmployee();
          }).catch(({response:{data}})=>{
            console.log(data);
          })
    }

    return(
        <div className="container">
            <br/>
            <Link to="/add" className="btn btn-success"> Add New Employee </Link>
                <table className="table">
                    <thead>
                        <tr className="bg-warning">
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">CreatedDateTime</th>
                            <th scope="col">Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(datas =>
                                <tr >
                                    <th scope="row">{datas.id}</th>
                                    <td>{datas.name}</td>
                                    <td>{datas.type}</td>
                                    <td>{datas.createdDateTime}</td>
                                    <td>
                                        <Link to={`/view/${datas.id}`} className='btn btn-primary me-2'> View </Link>
                                        <Link to={`/edit/${datas.id}`} className='btn btn-warning me-2'> Edit </Link>
                                        <button type="button" className="btn btn-danger me-2" onClick={()=>deleteEmployee(datas.id)}> Delete </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
        </div>
    );
}

export default Home;