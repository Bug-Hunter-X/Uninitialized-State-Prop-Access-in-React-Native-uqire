```javascript
// Correct - using optional chaining and useEffect
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [someValue, setSomeValue] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        setSomeValue(data.value);
      } catch (err) {
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <>
      {someValue !== null && <Text>{someValue}</Text>}
      {someValue === null && <Text>Loading...</Text>}
    </>>
  );
};

export default MyComponent;
```