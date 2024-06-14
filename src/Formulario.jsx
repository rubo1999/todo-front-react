import { useState } from 'react'

function Formulario({crearTarea}){

    let [textoTemporal,setTextoTemporal] = useState("")

    return (
            <form onSubmit={ async evento => {
                evento.preventDefault()

                if(textoTemporal.trim() != ""){

                    let {id,error} = await fetch("https://api-todo-mongo-3j66.onrender.com/tareas/tareas/nueva",{
                        method : "POST",
                        body : JSON.stringify({tarea : textoTemporal.trim() }),
                        headers : {
                            "Content-type" : "application/json"
                        }
                    }).then(respuesta => respuesta.json())

                    if(!error){
                        crearTarea({
                            id,
                            tarea : textoTemporal.trim(),
                            terminada : false
                        })
                        return setTextoTemporal("")
                    }
                    console.log("error a usuario")
                }

            }}>
                <input type="text" 
                placeholder="¿qué hay que hacer?" 
                value={textoTemporal}
                onChange={ evento => setTextoTemporal(evento.target.value) } />
                <input type="submit" value="crear tarea"/>
            </form>
            )
}

export default Formulario