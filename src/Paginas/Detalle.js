import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom"
import {getByIdPersonajes} from "../ProductosServicios/ProductosServ"
import Cargando from '../Componentes/Cargando';
import {Button, Card} from 'react-bootstrap';


function Detalle() {
  const [personaje,colocarPersonaje] = useState({})
  const [loading,colocarCargando] = useState(true)
  const {id} = useParams();
  console.log("id",id)
  useEffect(
    ()=>{
      const prueba = async ()=>{
        try{
          const respuesta = await getByIdPersonajes(id);
          if(respuesta.data){
            colocarPersonaje(respuesta.data)
            colocarCargando(false)
          }
        }catch(e){
          
        }
      }
      prueba()
    },
    [id]
  )
  if(loading){
    return (
      <Cargando/>
    );
  }else{
    return (

  <Card style={{ width: '50%', margin:"auto", backgroundColor: "gray" }}>
  <Card.Img variant="top" src={personaje.image} />
  <Card.Body>
    <Card.Title>{personaje.name}</Card.Title>
    <Card.Text>
    {personaje.species}
    </Card.Text>
    <Card.Text>
    {personaje.status}
    </Card.Text>
    <Button href="/" variant="dark" >Volver</Button>
  </Card.Body>
</Card>
    );
  }
  
}

export default Detalle;