import React, { useEffect, useRef } from 'react';

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL as string;
const VITE_GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID as string;

const GoogleLoginButton: React.FC = () => {
  const googleButtonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.onload = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: VITE_GOOGLE_CLIENT_ID,
          callback: (response: any) => {
            console.log('Resposta do Google:', response);
            handleGoogleLogin(response.credential);
          },
        });

        if (googleButtonRef.current) {
          window.google.accounts.id.renderButton(googleButtonRef.current, {
            theme: 'filled_blue',
            size: 'large',
            shape: 'pill',
          });
        }

        window.google.accounts.id.prompt();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleGoogleLogin = async (credential: string) => {
    console.log('Token do Google:', credential);

    try {
      const response = await fetch(`${VITE_BACKEND_URL}/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: credential }),
      });

      const data = await response.json();

      if (data.jwt) {
        // Salva o token no localStorage ou cookies para autenticação futura
        localStorage.setItem('jwt', data.jwt);
        console.log('Login bem-sucedido!', data);
        // Redireciona o usuário para a página inicial ou dashboard
        window.location.href = '/';
      } else {
        console.error('Erro ao autenticar com Google:', data.error);
      }
    } catch (error) {
      console.error('Erro ao enviar token para backend:', error);
    }
  };

  return (
    <div>
      <div ref={googleButtonRef}></div>
    </div>
  );
};

export default GoogleLoginButton;