'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Page() {

    const [featured, setFeatured] = useState('false');
    const [promotion, setPromotion] = useState('false');
    const [published, setPublished] = useState('false');

    const [products, setProducts] = useState([]);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const query = `?featured=${featured}&promotion=${promotion}&published=${published}`;
        const url = `${process.env.NEXT_PUBLIC_API_URL}/products/product${query}`;

        try {
            const response = await axios.get(url, {
                headers: {
                    'Accept': '*/*',
                },
            });

            const products = response.data;
            
            setProducts(products)
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/auth/signin`, {
                "qualquer e-mail": email,
                "qualquer senha": senha
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            console.log('Login realizado com sucesso:', response.data);
            router.push('/admin');
        } catch (error) {
            console.error('Erro ao fazer login:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Publicado:
                            <select value={published} onChange={(e) => setPublished(e.target.value)}>
                                <option value="true">Sim</option>
                                <option value="false">Não</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label>
                            Em destaque:
                            <select value={featured} onChange={(e) => setFeatured(e.target.value)}>
                                <option value="true">Sim</option>
                                <option value="false">Não</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label>
                            Em promoção:
                            <select value={promotion} onChange={(e) => setPromotion(e.target.value)}>
                                <option value="true">Sim</option>
                                <option value="false">Não</option>
                            </select>
                        </label>
                    </div>

                    <button type="submit">Recuperar Produtos</button>
                </form>
            </div>

            <div>
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img
                            src={`data:image/${product.image.extensão};base64,${product.image.dados}`}
                            alt={product.image.nome}
                            width={product.image.largura}
                            height={product.image.altura}
                        />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>

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
        </div>
    );
}