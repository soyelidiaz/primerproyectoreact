import instance from "../Configuracion/axios"
export function getAllPersonajes(){
    
    return instance.get("character")
}
export function getByIdPersonajes(id){
    
    return instance.get("character/"+id)    
}