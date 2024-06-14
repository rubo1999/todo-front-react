import { useState } from "react"

function Tarea({id,tarea,terminada,editarTexto,toggleEstado,borrarTarea}){

    let [textoTemporal,setTextoTemporal] = useState(tarea)

    let [editando,setEditando] = useState(false)

    return (
        
            <div className="tarea">
                <h2 className = {!editando ? 'visible' : '' }>{tarea}</h2>
                <input className = {editando ? 'visible' : '' } type="text" value={textoTemporal} onChange={evento => setTextoTemporal(evento.target.value)} />
                <button className="boton" onClick={() => {
                    if(editando){
                        if(textoTemporal.trim() != "" && textoTemporal.trim() != tarea){
                            setTextoTemporal(textoTemporal.trim())
                            setEditando(false)//quitar modo de edición
                            return editarTexto(id, textoTemporal.trim())
                        }
                        setTextoTemporal(tarea)
                        setEditando(false)
                    }else{
                        setEditando(true)//activar modo de edición
                    }
                }}>{editando ? "guardar" : "editar" }</button>
                <button 
                className="boton"
                onClick={() =>borrarTarea(id)}
                >borrar</button>
                <button 
                    className={ `estado ${terminada ? "terminada" : "" }` }
                    onClick={ () => toggleEstado(id)}
                ><span></span></button>
            </div>
        
    )
}

export default Tarea