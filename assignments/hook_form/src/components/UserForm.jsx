import React, { useState } from 'react';


const UserForm = (props) => {
    //creating props!
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfPassword] = useState("");
    //adding validations
    const [firstnameError, setfirstnameError] = useState("");
    const [lastnameError, setlastnameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [confpasswordError, setConfPasswordError] = useState("");

    const createUser = (e) => {
        //preventDefault stops default behavior, important for usestate
        e.preventDefault();

        //validation checks! - since this is updated in real time I don't want to handle it each time it changes 
        //console.log(firstname);
        if(firstname.length < 2){
            setfirstnameError("first name must be greater than 2 characters")
        } else {
            setfirstnameError("")
        }
        if(lastname.length < 2){
            setlastnameError("last name must be greater than 2 characters")
        } else {
            setlastnameError("")
        }
        if(email.length < 2){
            setemailError("first name must be greater than 2 characters")
        } else {
            setemailError("")
        }
        if(password.length < 8){
            setpasswordError("password must be greater than 8 characters")
        }
        if (password != confpassword){
            setConfPasswordError("passwords must match!")
        }
        const newUser = { firstname, lastname, email, password, confpassword };
        console.log("Welcome", newUser);
    };

    return (
        //borrowing some stuff from the prev example in platform "Forms"
        <div>
        <form onSubmit={createUser}>
            <div>
                <label>first name: </label>
                <input type="text" onChange={(e) => setFirstname(e.target.value)} />
                {
                    firstnameError ? <p style={{color: 'red'}}>{firstnameError}</p> : ' '
                }
            </div>
            <div>
                <label>last name: </label>
                <input type="text" onChange={(e) => setLastname(e.target.value)} />
                {
                    lastnameError ? <p style={{color: 'red'}}>{lastnameError}</p> : ' '
                }
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
                {
                    emailError ? <p style={{color: 'red'}}>{emailError}</p> : ' '
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
                {
                    passwordError ? <p style={{color: 'red'}}>{passwordError}</p> : ' '
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(e) => setConfPassword(e.target.value)} />
                {
                    confpasswordError ? <p style={{color: 'red'}}>{confpasswordError}</p> : ' '
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        <div>First Name: {firstname}</div>
        <div>Last Name: {lastname}</div>
        <div>Email: {email}</div>
        <div>Password: {password}</div>
        </div>
    );
};

export default UserForm;
