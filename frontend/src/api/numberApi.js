import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // Adjust as necessary

export const calculateNumber = async (number) => {
    try {
        const response = await axios.post(`${BASE_URL}/numbers`, number, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error during API request:', error);
        throw error; // Rethrowing the error might be useful if you have error handling logic upstream
    }
};

export const getAll = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/numbers/all`, {
            headers: {
                'Accept': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching all numbers:', error);
        throw error;
    }
};
