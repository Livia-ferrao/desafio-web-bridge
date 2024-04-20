

const BASE_URL = 'http://localhost:8080'; // Ajuste conforme necessário


export const calculateNumber = async (number) => {
    try {
        const response = await fetch(`${BASE_URL}/numbers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(number) 
        });

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        return await response.json();
    } catch (error) {
        console.error('Error during fetch:', error);
        throw error;
    }
};


export const getAll = async () => {
    try {
        const response = await fetch(`${BASE_URL}/numbers/all`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching all primes:', error);
        throw error;
    }
};
