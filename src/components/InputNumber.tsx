// src/components/InputNumber.tsx
import { useState } from 'react';

interface InputNumberProps {
  placeholder?: string;
  onSubmit: (value: string) => void; // Pass the number to parent component or use for form submission
}

const InputNumber: React.FC<InputNumberProps> = ({ placeholder, onSubmit }) => {
  const [number, setNumber] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Only allow numeric characters
    const numericValue = value.replace(/[^0-9]/g, '');
    setNumber(numericValue);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(number);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={number}
          onChange={handleChange}
          placeholder={placeholder}
          className="text-left p-4 border rounded-lg shadow-md w-full"
        />
        {number && (
          <button 
            type="submit" 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default InputNumber;
