import { useState } from "react"

function Formulario({crearTarea}){

    let [textoTemporal,setTextoTemporal] = useState("");

    return (
        <>
            <form onSubmit={evento => {
                evento.preventDefault()

                if(textoTemporal.trim() != ""){
                    crearTarea({
                        id:2,
                        tarea: textoTemporal.trim(),
                        terminada:false
                    })
                    setTextoTemporal("")
                }
            }}>
                <input 
                type="text" 
                placeholder="¿Qué hay que hacer?" 
                value={textoTemporal} 
                onChange={evento => setTextoTemporal(evento.target.value)} />
                <input type="submit" value="Añadir tarea" />
            </form>
        </>
    )
}


export default Formulario