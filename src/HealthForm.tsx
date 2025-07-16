import React, { useState } from 'react';
import { HealthData } from './App';

interface Props {
    onSubmit: (data: HealthData) => void;
}

const HealthForm: React.FC<Props> = ({ onSubmit }) => {
    const [steps, setSteps] = useState<number>(0);
    const [water, setWater] = useState<number>(0);
    const [sleep, setSleep] = useState<number>(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ steps, water, sleep });
    };

    return (
        <form onSubmit = {handleSubmit} style = {{ marginBottom: '20px' }}>
            <div>
                <label> 🏃‍♀️ Steps: </label>
                <input
                  type = "number"
                  value = {steps}
                  onChange = {(e) => setSteps(Number(e.target.value))}
                  />
            </div>
            <div>
                <label> 💦 Water (L): </label>
                <input
                  type = "number"
                  value = {water}
                  onChange = {(e) => setWater(Number(e.target.value))}
                  />
            </div>
            <div>
                <label> 😴 Sleep: </label>
                <input 
                  type = "number"
                  value = {sleep}
                  onChange = {(e) => setSleep(Number(e.target.value))}
                  />
            </div>
            <button type = "submit">Save</button>
        </form>
    );
};

export default HealthForm;