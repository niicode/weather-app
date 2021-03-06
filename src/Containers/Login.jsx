import React, {useState} from 'react';
import {Button, FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import './Login.css';
// import { Auth } from "aws-amplify";

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function validateForm(){
        return email.length >0 && password > 0;
    }

    function handleSubmit(event){
        event.preventDefault();
    }
    return(
        <div className = "Login">
            <form onSubmit ={handleSubmit}>
                <FormGroup controlId = 'email' bssize='large'>
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value ={email}
                        onChange ={e => setEmail(e.target.value)}
                    />
                
                </FormGroup>
                <FormGroup controlId = 'password' bssize='large'>
                    <FormLabel>password</FormLabel>
                    <FormControl
                        autoFocus
                        type="password"
                        value ={password}
                        onChange ={e => setPassword(e.target.value)}/>
                
                </FormGroup>
                <Button block bsSize="large" /*disabled={!validateForm()}*/ type="submit">
                    Login
                </Button>
            </form>
        </div>
    )
}