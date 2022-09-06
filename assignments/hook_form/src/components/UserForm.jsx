import React, { useState } from 'react';


const UserForm = (props) => {
    //creating props!
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfPassword] = useState("");

    const createUser = (e) => {
        //preventDefault stops default behavior, important for usestate
        e.preventDefault();
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
            </div>
            <div>
                <label>last name: </label>
                <input type="text" onChange={(e) => setLastname(e.target.value)} />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(e) => setConfPassword(e.target.value)} />
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
