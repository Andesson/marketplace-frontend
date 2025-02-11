interface SignupData {
    name: string;
    email: string;
    password: string;
}

export const signup = async (data: SignupData) => {
    const urlBackend = import.meta.env.VITE_BACKEND_URL as string;

    if (!urlBackend) {
        console.error('Error: environment variable is not defined.');
        throw new Error('Configuration error. Please try again later.');
    }

    try {
        const response = await fetch(`${urlBackend}/api/auth/signup`, {
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
            throw new Error('An unexpected error occurred. Please try again later.');
        }

        if (!response.ok) {
            const errorMessage = result.error || 'Erro durante o cadastro.';
            throw new Error(errorMessage);
        }

        return result;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
};