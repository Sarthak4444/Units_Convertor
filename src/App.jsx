import React, { useState } from 'react';

const UnitConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputUnit, setInputUnit] = useState('rem');
  const [outputUnit, setOutputUnit] = useState('px');
  const [outputValue, setOutputValue] = useState(null);

  const baseFontSize = 16; // Assuming the base font size is 16px for rem


  
  const units = {
    rem: baseFontSize,
    px: 1,
    inches: 96,
    cm: 37.7953,
    points: 1.33333,
  };

  const convertUnits = (value, fromUnit, toUnit) => {
    if (isNaN(value)) return null;
    const inPixels = value * units[fromUnit];
    return inPixels / units[toUnit];
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (!isNaN(value)) {
      const result = convertUnits(parseFloat(value), inputUnit, outputUnit);
      setOutputValue(result);
    } else {
      setOutputValue(null);
    }
  };

  const handleInputUnitChange = (e) => {
    setInputUnit(e.target.value);
    if (!isNaN(inputValue)) {
      const result = convertUnits(parseFloat(inputValue), e.target.value, outputUnit);
      setOutputValue(result);
    }
  };

  const handleOutputUnitChange = (e) => {
    setOutputUnit(e.target.value);
    if (!isNaN(inputValue)) {
      const result = convertUnits(parseFloat(inputValue), inputUnit, e.target.value);
      setOutputValue(result);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white font-sans">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Unit Converter</h2>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter value"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full p-3 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select
            value={inputUnit}
            onChange={handleInputUnitChange}
            className="mt-4 w-full p-3 bg-gray-700 text-white font-semibold rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="rem">rem</option>
            <option value="px">px</option>
            <option value="inches">inches</option>
            <option value="cm">cm</option>
            <option value="points">points</option>
          </select>
        </div>
        <div className="mb-6">
          <p className="text-center font-semibold mb-2">TO</p>
          <select
            value={outputUnit}
            onChange={handleOutputUnitChange}
            className="w-full p-3 bg-gray-700 text-white font-semibold rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="rem">rem</option>
            <option value="px">px</option>
            <option value="inches">inches</option>
            <option value="cm">cm</option>
            <option value="points">points</option>
          </select>
        </div>
        {outputValue !== null && (
          <p className="text-center text-xl font-semibold">
            {inputValue} {inputUnit} = {outputValue.toFixed(2)} {outputUnit}
          </p>
        )}
      </div>
    </div>
  );
};

export default UnitConverter;
