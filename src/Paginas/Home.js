import React,{useState,useEffect} from 'react';
import Personajes from '../Componentes/Personajes';
import {getAllPersonajes} from "../ProductosServicios/ProductosServ"
import firebase from '../Configuracion/firebase';
import Cargando from '../Componentes/Cargando';
import {Row} from 'react-bootstrap'



function Home() {
  const [personajes,colocarPersonajes] = useState([])
  const [loading,colocarCargando] = useState(true)

  console.log(firebase)

  useEffect(
    ()=>{

      const request = async ()=>{
        try{
          const response = await getAllPersonajes()
          if(response.data.results){
            colocarPersonajes(response.data.results)
            colocarCargando(false)
          }
        }catch(e){
          console.log(e)
        }
      }
      request()
    },
    []
  )
  if(loading){
    return (
      <Cargando/>
    );
  }else{
    return (
      
      <Row xs={"auto"} md={"auto"} className="auto">
      {Array.from({ length: 20 }).map((_, idx) => (
        <>
      {personajes.map(todosPersonajes=><Personajes chicharron={todosPersonajes} />)}
      </>
      ))}
  </Row>


    );
  }
  
}

export default Home;