import styled from 'styled-components';

const Opcao = styled.li`
    min-width: 120px;
    font-size: 16px;
    height: 100%;
    display: flex;
    padding: 0  5px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Opcoes = styled.ul`
    display: flex;
`

const textoOpcoes = ['Categorias', 'Favoritos', 'Minha estante'];

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
            <Opcao>{texto}</Opcao>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader;