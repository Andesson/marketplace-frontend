export const fetchProtectedData = async () => {
    const urlBackend = import.meta.env.VITE_BACKEND_URL as string;
    const token = localStorage.getItem('jwt');

    if (!token) {
        throw new Error('No token found. Please log in.');
    }

    try {
        const response = await fetch(`${urlBackend}/auth-service/v1/protected`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        const text = await response.text();

        let result;
        try {
            result = JSON.parse(text);
        } catch (error) {
            console.error('Erro ao analisar a resposta do servidor:', text);
            throw new Error('Resposta inválida do servidor.');
        }

        if (!response.ok) {
            throw new Error(result.error || 'Erro ao acessar dados protegidos.');
        }

        return result;
    } catch (error) {
        console.error('Erro na requisição protegida:', error);
        throw error;
    }
};