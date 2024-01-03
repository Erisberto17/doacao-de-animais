import './home.css'
import Perfis from '../../components/Home/ProfilesIconsAnimals/Perfis'

function Home() {
  
  
  return (
    <div id="body">
        <div className='anuncio-1'></div>
        <h2>Pets disponiveis</h2>
        <hr />
        <section>
        <div className='anuncio-lado-1'> </div>
        < div className='secao-perfis'>
          <div className="filtragem">
            <p>Filtrar por :</p>
              <a href=""><img src="../../../public/animais.png" alt="Animais" /> Todos</a>
              <a href=""><img src="../../../public/IconDog.png" alt="Icone de Cachorro" /> Cachorros</a>
              <a href=""><img src="../../../public/IconCat.png" alt="Icone de Gato" />Gatos</a>
              <a href=""><img src="../../../public/IconOutros.png" alt="Icone de Passaro" />Outros</a>            
            </div>

          <Perfis/>

        </div>
        </section>

    </div>
  )
}

export default Home;