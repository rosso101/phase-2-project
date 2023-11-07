import React, { useEffect, useState } from 'react';

function DbData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('db.json') // Use the correct path to your db.json file
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <h2>DB Data</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DbData;
