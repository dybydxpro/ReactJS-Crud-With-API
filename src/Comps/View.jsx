import React, { useEffect, useState } from "react";  
import axios from "axios";
import { useParams } from 'react-router-dom';

function View(){
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


    return(
        <div className="container">
            <br/>
            <table class="table table-danger">
                <tbody class="table-danger">
                    <tr>
                        <th scope="col">
                            <td><h2>ID :</h2></td>
                        </th>
                        <th scope="col">
                            <td><h2>{ id }</h2></td>
                        </th>
                    </tr>    
                    <tr>
                        <td>
                            <td><h2>Name :</h2></td>
                        </td>
                        <td>
                            <td><h2>{ data.name }</h2></td>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <td><h2>Type :</h2></td>
                        </td>
                        <td>
                            <td><h2>{ data.type }</h2></td>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <td><h2>Created Date Time :</h2></td>
                        </td>
                        <td>
                            <td><h2>{ data.createdDateTime }</h2></td>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default View;