import { useEffect, useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function MeusPedidos() {
    const navigate = useNavigate();
    const [pedidos, setPedidos] = useState([])
    const [erro, setErro] = useState('')
    useEffect(() => {
        fetch('http://localhost:10000/meus-pedidos', {
            headers: {
                authorization: 'token '+localStorage.getItem('accessToken')
            }
        })
        .then(res => res.json())
        .then(resultado =>  setPedidos(resultado))
        .catch(()=>setErro('Deu erro ao pegar os pedidos'))
    }, [])

    if(erro){
        navigate('/login');
    }

    return (
        <>
            <h1>
                Meus Pedidos
            </h1>
            <ul>
                {pedidos.map(item=><li>Pedido: {item.pedido} / Valor do pedido: {item.valorTotal}</li>)}
            </ul>

            {erro && <p>{erro}</p>}
        </>
    );
}

export default MeusPedidos;
