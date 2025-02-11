interface LoginData {
    email: string;
    password: string;
}

export const login = async (data: LoginData) => {
    const urlBackend = import.meta.env.VITE_BACKEND_URL as string;

    if (!urlBackend) {
        console.error('Error: VITE_BACKEND_URL environment variable is not defined.');
        throw new Error('Configuration error. Please try again later.');
    }

    try {
        const response = await fetch(`${urlBackend}/api/auth/logon`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
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
            const errorMessage = result.error || 'Erro durante o login.';
            throw new Error(errorMessage);
        }

        if (result.token) {
            localStorage.setItem('jwt', result.token);
        }

        return result;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};