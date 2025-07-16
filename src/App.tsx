import React, { useState } from 'react';
import HealthForm from './HealthForm';
import HealthSummary from './HealthSummary';

export interface HealthData {
  steps: number;
  water: number;
  sleep: number;
}

const App: React.FC = () => {
  const [data, setData] = useState<HealthData>({
    steps: 0,
    water: 0,
    sleep: 0,
  });

  return (
    <div style = {{ padding: '20px', fontFamily: 'Arial' }}>
      <h1> Health Tracker </h1>
      <HealthForm onSubmit = {setData} />
      <HealthSummary data = {data} />
    </div>
  );
};

export default App;