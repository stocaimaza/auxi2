import './EstilosCondicional.css'
//Podemos usar los estilos condicionales en línea: 
//Podemos hacerlo aplicando "clases"

const EstilosCondicional = ({booleano, clase}) => {
  return (
    <div>
        <h4 style={{color: booleano ? "red" : "green"}} >Estilos condicional</h4>
        <h4 className={booleano ? "amarillo" : "azul" }  >Trabajando con ClassName</h4>
        <h4 className={booleano && "azul"}>Ejemplo con operador &&</h4>
        <h4 className={clase}> Recibo una clase props</h4>
    </div>
  )
}

export default EstilosCondicional
