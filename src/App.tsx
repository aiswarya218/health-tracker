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

// {
//   "products": [
//     {
//       "id": 1,
//       "title": "Product 1",
//       "category": "electronics",
//       "price": 3000,
//       "description": "This is the description about product 1"
//     },
//     {
//       "id": 2,
//       "title": "Product 2",
//       "category": "electronics",
//       "price": 2000,
//       "description": "This is the description about product 2"
//     },
//     {
//       "id": 3,
//       "title": "Product 3",
//       "category": "electronics",
//       "price": 3500,
//       "description": "This is the description about product 3"
//     },
//     {
//       "id": 4,
//       "title": "Product 4",
//       "category": "electronics",
//       "price": 4000,
//       "description": "This is the description about product 4"
//     },
//     {
//       "id": 5,
//       "title": "Product 5",
//       "category": "electronics",
//       "price": 4200,
//       "description": "This is the description about product 5"
//     },
//     {
//       "id": 6,
//       "title": "Product 6",
//       "category": "electronics",
//       "price": 5000,
//       "description": "This is the description about product 6"
//     },
//     {
//       "id": 7,
//       "title": "Product 7",
//       "category": "electronics",
//       "price": 5500,
//       "description": "This is the description about product 7"
//     },
//     {
//       "id": 8,
//       "title": "Product 8",
//       "category": "electronics",
//       "price": 3000,
//       "description": "This is the description about product 8"
//     },
//     {
//       "id": 9,
//       "title": "Product 9",
//       "category": "electronics",
//       "price": 1000,
//       "description": "This is the description about product 9"
//     },
//     {
//       "id": 10,
//       "title": "Product 10",
//       "category": "elctronics",
//       "price": 1700,
//       "description": "This is the description about product 10"
//     }
//   ]
// }