import React from 'react'

//Tecnicas de Rendering Condicional: 
//1) RETURN TEMPRANO: 

//Esta técnica es propia de JS: evito colocar el "else"

//Función booleana que me dice si es fin de semana. 

function esFinDe(dia) {
    if (dia === "sabado" || dia === "domingo") {
        return true;
    } else {
        return false;
    }
}

//Pero si aplico la tecnica del "return temprano": 

function esFinDeSemana(dia) {
    if (dia === "sabado" || dia === "domingo") {
        return true;
    }
    return false;
}


//¿Cómo lo aplico en React? 
//React renderiza el resultado del return de nuestra función y cada return se transforma en nuestro nuevo árbol de partida para próximos.



const TecnicaUno = ({nombre}) => {
    if (nombre === "Samuel") {
        return <h1>Hola Administrador!</h1>;
    }
    return <h1>Hola {nombre}!</h1>;
}

export default TecnicaUno
