import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Create() {
    const [email, setEmail] = useState("");
    const [password, setPassword] =  useState("");
    const header = {"Access-Control-Allow-Origin" : "*"};
     const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("name is", email);
        // console.log("password is" , password);
         axios.post("https://65746a7cf941bda3f2afb971.mockapi.io/Crud-react",{
            email : email,
            password : password,
            header,
         }).then(() =>{
            navigate("/read");
         })
         

    }
    
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick = {handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default Create;