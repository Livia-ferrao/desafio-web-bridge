import React, { useState } from 'react';
import { calculateNumber } from '../api/numberApi';
import '../styles/NumberInput.css'

function NumberInput({ onUpdateData }) {

  const [number, setNumber] = useState('')
  const [result, setResult] = useState('')
  const [isValidInteger, setIsValidInteger] = useState(true);

  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = async () => {

    setNumber('');
    const isInteger = /^\d+$/.test(number);
    if (!isInteger) {
      setIsValidInteger(false);
      setResult('')
    } else { 
        setIsValidInteger(true);
        try {
            const response = await calculateNumber(number);
            setResult(response);
            onUpdateData(response);
          } catch (error) {
            console.error('Failed to calculate:', error);
          }
    }
  }
    
  return (
    <div className="container">
      <form onSubmit={(event) => event.preventDefault()} className="form">
        <label htmlFor="numberInput" className="form-label">Insira um número inteiro k</label>
        <div className="form-input">
          <input 
            type="text" 
            id="numberInput" 
            className='input'
            value={number}
            onChange={handleInputChange}
          />
          <button type="button" className="btn" onClick={handleSubmit}>Calcular</button>
        </div>
        {!isValidInteger && <div className="invalid-input">Por favor, insira um número inteiro válido.</div>}
      </form>

      <div className='result'>
        <div>Resultado: </div>
        {result.input && (
            <div>Número: {result.input}. Contagem: {result.count}. Tempo de execução: {result.executionTime} ms.</div>
        )}
      </div>
    </div>
  );
  
}
  
export default NumberInput;
  