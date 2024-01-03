import './BarraNavegacao.css';
import {useState} from 'react';

function NavBar() {
    const [mostrarMenu, setMostrarMenu] = useState(false);
    const [botaoConteudo, setBotaoConteudo] = useState('|||');


    const toggleOpcoes = () => {
        setMostrarMenu(!mostrarMenu);
        setBotaoConteudo(mostrarMenu ? '|||' : 'X');
    }
return <div>
        <nav >
            <ul>
                <li id='nome'>adotar.com.br</li>
                <li id='menu' >
                        <button onClick={toggleOpcoes} className={mostrarMenu ? 'fechar' : ''}>
                            <span className="botao-texto">{botaoConteudo}</span>
                        </button>
                        <div className={`menu-hidden ${mostrarMenu ? 'show' : 'hide'}`}>
                        <a href='/#' >Adotar</a>
                        <a href='/Register'>Registrar Animal</a>
                        <a href=''>Sobre nós</a>
                        
                    </div>
                </li>

            </ul>
        </nav>

       </div>

}
export default NavBar;