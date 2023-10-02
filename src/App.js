import React, { useState, useEffect } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayedValue, setDisplayedValue] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayedValue(inputValue);
    }, 1000); // Wait for 1 second before displaying the complete value

    return () => clearTimeout(timeout);
  }, [inputValue]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <input
        type="number"
        step="0.01"
        min="0"
        value={inputValue}
        onChange={handleInputChange}
        style={{ color: 'black' }} // Change the input text color to be visible
      />
      <div style={{ marginTop: '10px' }}>
        <label>Displayed Value:</label>
        <div style={{ border: '1px solid white', padding: '5px' }}>{displayedValue}</div>
      </div>
    </div>
  );
};

export default App;
