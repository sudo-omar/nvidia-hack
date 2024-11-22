import { useState, useEffect } from "react";
import axios from 'axios';


const Dashboard = () => {
    const [calls, setCalls] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCalls = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/calls'); // Call your backend API
            setCalls(response.data); // Update the state with call data

            
        } catch (err) {
            setError("Failed to fetch calls");
            console.error(err);
        }
        };

        fetchCalls();

        const interval = setInterval(fetchCalls, 5000);
        return () => clearInterval(interval);

    }, []);

    return (
        <div>
        <h1>Call Data</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <ul>
            {calls.map((call, index) => (
            <li>{call.transcript}</li>

            ))}
        </ul>
        </div>
    );
}

export default Dashboard;