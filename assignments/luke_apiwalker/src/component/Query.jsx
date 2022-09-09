import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Query = () => {

    const navigate = useNavigate();
    const [type, setType] = useState("");
    const [id, setiD] = useState("");

    const typeSelect = (value) => {
        console.log(value);
        setType(value);
    }

    const idSelect = (value) => {
        console.log(value)
        setiD(value);
    }

    const sendResults = (e) => {
        e.preventDefault();
        navigate(`/results/${type}/${id}`)
    }

    return (
        <div>
            <h3> Make a query</h3>
            <form onSubmit={sendResults}>
                <select onChange={e => typeSelect(e.target.value)}>
                    <option>people</option>
                    <option>planets</option>
                </select>
                <input type="number" onChange={e => idSelect(e.target.value)} />
                <button type="submit" >Get stuff</button>
            </form>
        </div>
    )
}
export default Query;