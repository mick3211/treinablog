import nextAuth from 'next-auth';
import CreadencialsProvider from 'next-auth/providers/credentials';

export default nextAuth({
    secret: process.env.NEXT_SECRET,
    providers: [
        CreadencialsProvider({
            name: 'TreinaBlog',
            credentials: {
                username: {
                    placeholder: 'Digite seu nome de usuário',
                    label: 'Nome de usuário',
                    type: 'text',
                },
                password: {
                    placeholder: 'Senha',
                    label: 'Senha',
                    type: 'password',
                },
            },
            async authorize(credentials, req) {
                if (
                    credentials &&
                    credentials.username === 'admin' &&
                    credentials.username === 'admin'
                ) {
                    return { id: 1, name: 'Adiministrador', email: '' };
                } else return null;
            },
        }),
    ],
});
