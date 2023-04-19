//Tecnicas de Rendering Condicional: 
//2) EN LINEA CON FRAGMENT: 

//La usamos cuando deseamos renderizar un elemento condicionalmente en función de una expresión booleana.

const TecnicaDos = ({ booleano }) => {
    return (<>
        {booleano && <h2>Usuario autorizado</h2>}     {!booleano && <h2>Usuario NO autorizado</h2>}
    </>)
}       
//Recibo un booleano, si el booleano es true, renderizo el elemento. 
//! = niega el valor.
export default TecnicaDos
