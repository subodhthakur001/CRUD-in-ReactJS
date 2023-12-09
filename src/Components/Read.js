import React, { useEffect, useState } from 'react'
import axios from "axios";
import Table from 'react-bootstrap/Table';

function Read() {

    const [data , setData] = useState([]);
    function getData() {
        axios
        .get('https://65746a7cf941bda3f2afb971.mockapi.io/Crud-react')
        .then((res) => { 
            console.log(res.data);
            setData(res.data);
        })
    }
    function handleDelete(id){
        axios.delete(`https://65746a7cf941bda3f2afb971.mockapi.io/Crud-react/${id}`
        ).then(() => {
            getData();
        })
    }
  useEffect(() => {
    getData();
  }, []);

    return (
        <>
        <h2>Read Operation  </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Email</th>
            <th>Password</th>
            <th>Edit option</th>
            <th>Delete Option</th>
          </tr>
        </thead>
           {
             data.map((item, index) => {
                return (
                    <>
                    <tbody>
          <tr>
            <td>{++index}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>
                <button className = "btn-success"> Edit </button>
            </td>
            <td>
                <button className = "btn-danger" onClick = {() => handleDelete(item.id)}> Delete </button>
            </td>
          </tr>
        </tbody>
                    </>
                )
             })

           }
      </Table>
      </>
    );
  }
  
  export default Read;
