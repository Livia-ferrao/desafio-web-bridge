import React, { useState, useEffect } from 'react';
import { getAll } from '../api/numberApi';  // Ajuste o caminho conforme necessário
import '../styles/NumberTable.css'

function NumberTable({reload}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAll();
                setData(result);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, [reload]);

    return (
        <div className="table-container">
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Número</th>
                        <th>Contagem</th>
                        <th>Tempo de execução</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.input}</td>
                            <td>{item.count}</td>
                            <td>{item.executionTime} ns</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
  }
  
export default NumberTable;
  