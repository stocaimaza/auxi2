//De la siguiente forma puedo hacer un renderizado condicional: 

/*
import { useState } from "react"

const BotonCondicional = () => {
    const [verificado, setVerificado] = useState(false);

    const habilitarUsuario = () => {
        setVerificado(true);
    }

    const deshabilitarUsuario = () => {
        setVerificado(false);
    }

  return (
    <>
        {verificado ? (<button onClick={deshabilitarUsuario}> Cerrar Sesión </button>) :  (<button onClick={habilitarUsuario}> Iniciar Sesión </button>)}
    </>
  )
}

export default BotonCondicional

*/
//Si lo quisiera hacer con un login completo podría realizar esto: 



import { useState } from "react"

const BotonCondicional = () => {
    const [verificado, setVerificado] = useState(false);
    //Creo los estados para el usuario y la contraseña: 
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");

    const habilitarUsuario = (e) => {
        e.preventDefault();
        //Implemento mi lógica de validación:
        if (usuario === "Tinki" && pass === "Winki") {
            setVerificado(true);
        } else {
            setUsuario("Ladrón");
            setPass("Vete malvado!");
        }
    }

    const deshabilitarUsuario = () => {
        setVerificado(false);
    }

    const guardarUsuario = (e) => {
        setUsuario(e.target.value);
    }

    const guardarPass = (e) => {
        setPass(e.target.value)
    }

    return (
        <>
            {verificado ? (<button onClick={deshabilitarUsuario}> Cerrar Sesión </button>) : (
                <form onSubmit={habilitarUsuario}>
                    <label htmlFor="usuario"> Usuario </label>
                    <input type="text" id="usuario" onChange={guardarUsuario} value={usuario} />

                    <label htmlFor="pass"> Contraseña </label>
                    <input type="text" id="pass" onChange={guardarPass} value={pass} />

                    <button> Iniciar Sesión </button>
                </form>
            )}
        </>
    )
}

export default BotonCondicional