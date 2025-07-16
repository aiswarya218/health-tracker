import React, { useEffect, useState }  from 'react';

interface HealthData {
    id?: number;
    steps: number;
    water: number;
    sleep: number;
}

const  App: React.FC = () => {
    const [data, setData] = useState<HealthData[]>([]);
    const [form, setForm] = useState<HealthData>({ steps: 0, water:0, sleep:0 });

    useEffect(() => {
        fetch('http://localhost:3001/health')
        .then((res) => res.json())
        .then((json) => setData(json));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('http://localhost:3001/health', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });
        const newEntry = await res.json();
        setData([...data, newEntry]);
        setForm({ steps: 0, water: 0, sleep: 0 });
    };

    return (
        <div style = {{ padding: '20px' }}>
            <h1>Health Logger</h1>
            <form onSubmit = {handleSubmit}>
                <input
                type = "number"
                placeholder = "Steps"
                value = {form.steps}
                onChange = {(e) => setForm({ ...form, steps: +e.target.value })}
                />
                <input 
                type = "number"
                placeholder = "Water (L)"
                value = {form.water}
                onChange = {(e) => setForm({ ...form,water: +e.target.value })}
                />
                <input 
                type = "number"
                placeholder = "Sleep (hrs)"
                value = {form.sleep}
                onChange = {(e) => setForm({ ...form, sleep: +e.target.value })}
                />
                <button type = "submit">Add</button>
            </form>

            <h2>Health Logs</h2>
            <ul>
                {data.map((entry) => (
                    <li key = {entry.id}>
                          {entry.steps} steps -  {entry.water} L -  {entry.sleep} hrs
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;