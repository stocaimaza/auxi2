
//Memo: es una función de React que me sirve para evitar que se recargue un componente hijo de forma innecesaria. 

const Memo = React.memo(( props ) => {
    return (
        <div>
            <h1>{props.titulo}</h1>
            <p>{props.texto}</p>
        </div>
    )
})

export default Memo

//React Memo va a verificar que las props cambien antes de renderizar el componente nuevamente.
