//Tecnicas de Rendering Condicional: 
//3) OPERADOR TERNARIO: 
//Renderizamos elementos condicionalmente en función de una expresión booleana pero utilizamos el operador ternario. 

const TecnicaTres = ({ booleano }) => {
    return (
        <div>
            {
                booleano ? <h3>Acceso Permitido</h3> : <h4>Acceso Denegado</h4>
            }
        </div>
    )
}

export default TecnicaTres
