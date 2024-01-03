import "./Form.css"


function Form (){
    
    return(
        <div id="center">
            <div id="form">

                <div id="lado-infos">
                    <label htmlFor="typeAnimal">
                        <p>Tipo do Animal</p>
                        <input type="text" id="typeAnimal" />
                    </label>

                    <label htmlFor="">
                        <p>Raça do Animal</p>
                        <input type="text" id="breedAnimal" />

                    </label>  

                    <div id="timeLife">
                        <p>Idade do Animal</p>
                        <div>
                            <input type="number" />
                            <select name="d-w-m" id="d-w-m">
                                <option value="none"> ------▼------</option>
                                <option value="day">Dias</option>
                                <option value="week">Semana(s)</option>
                                <option value="mounth">Mes</option>
                                <option value="year">Ano(s)</option>

                            </select>

                        </div>


                    </div>
                    
                    <div id="genderAnimal">
                        <p>Genero do animal</p>
                        <div id="opcoes">
                            <span>macho</span>
                            <span>femea</span>
                        </div>
                    </div>


                </div>
                    
                <div id="lado-pessoal">

                    <div id="imgAnimal">
                        <div id="photos">
                            
                            <label htmlFor="uploadImg">Selecione a Imagem</label>
                            <input type="file" id="uploadImg"/>
                        </div>
                    </div>
                    <div id="nameAnimal">
                        <p>Nome do Animal</p>
                    <input type="text" id="animalName" />
                    </div>
                    
                    <div className="cardAnimal">
                        <p>Possui carterinha de vacinação ?</p>
                        <div id="opcoes-card">
                            <span>Sim</span>
                            <span>Não</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Form;