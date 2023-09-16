import './estilo.css'

const textoOpcoes = ['Categorias', 'Favoritos', 'Minha estante'];

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            {textoOpcoes.map((texto) => (
            <li className='opcao'>{texto}</li>
            ))}
        </ul>
    )
}

export default OpcoesHeader;