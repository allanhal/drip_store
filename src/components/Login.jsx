import { useState } from 'react';
import './Header.css';

function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [erro, setErro] = useState('')
    return (
        <>
            <h1>
                Tela de email
            </h1>
            <p>email: {email}</p>
            <p>senha: {senha}</p>
            <input type="text" name="email" id="" onChange={(e) => { setEmail(e.target.value) }} value={email} />
            <input type="password" name="senha" id="" onChange={(e) => { setSenha(e.target.value) }} value={senha} />
            <input type="button" value="Logar" onClick={() => {
                fetch('http://localhost:10000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json' // Define o tipo de conteúdo como JSON
                    },
                    body: JSON.stringify({
                        email: email,
                        password: senha
                    })
                })
                    .then(res => res.json())
                    .then(resultado => {
                        console.log(resultado)
                        localStorage.setItem('accessToken', resultado.accessToken)
                    })
                    .catch(() => setErro('deu ruim'))
            }} />
            {erro && <p style={{ color: 'red' }}>{erro}</p>}
        </>
    );
}

export default Login;
