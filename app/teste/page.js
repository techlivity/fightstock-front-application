'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Page() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/auth/signin`, {
                "e-mail": email,
                "senha": senha
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'insomnia/9.3.2'
                }
            });

            // Se o login for bem-sucedido, você pode redirecionar o usuário
            console.log('Login realizado com sucesso:', response.data);
            router.push('/dashboard'); // Exemplo de redirecionamento para uma página de dashboard
        } catch (error) {
            console.error('Erro ao fazer login:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ marginBottom: '10px', padding: '8px', fontSize: '16px' }}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                    style={{ marginBottom: '20px', padding: '8px', fontSize: '16px' }}
                />
                <button type="submit" style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>
                    Login
                </button>
            </form>
        </div>
    );
  }