import React from 'react';
import { HealthData } from './App';

interface Props {
    data: HealthData;
}

const HealthSummary: React.FC<Props> = ({ data }) => {
    return (
        <div>
            <h2> Today's Summary</h2>
            <ul>
                <li> 🏃‍♀️Steps Walked: {data.steps}</li>
                <li> 💦Water Intake: {data.water} L</li>
                <li> 😴Sleep Duration: {data.sleep} hrs</li>
            </ul>
        </div>
    );
};

export default HealthSummary;