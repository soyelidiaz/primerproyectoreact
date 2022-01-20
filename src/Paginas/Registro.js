import React from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Componentes/FormularioGen';
import Button from 'react-bootstrap/Button'
import firebase from '../Configuracion/firebase';
import { Navigate } from 'react-router-dom';



function Registro() {
    const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => 
  {try
    {console.log ("datosr recibidos",data);
  const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email,data.password)
  console.log(responseUser)
  if(responseUser.user.uid){
    const document = await firebase.db.collection("usuarios")
    .add({
      name:data.name,
      lastname:data.lastname,
      userId:responseUser.user.uid
    })
  } 
 
}catch(e){
  console.log(e)
}
{
 alert('Registro Registrado =P!');
 <Navigate to="/"/>
} 
  }
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup label="NOMBRE" register={{...register("name")}} placeholder="ingrese nombre" textoAyuda="este campo es obligatorio"/> 
          <FormGroup label="APELLIDO" register={{...register("lastname")}} placeholder="ingrese apellido" textoAyuda="este campo es obligatorio"/>
          <FormGroup label="TELEFONO" register={{...register("telefono")}} placeholder="ingrese telefono" textoAyuda="código país+código de área+número sin el 15"/>
          <FormGroup label="EMAIL" type="email" register={{...register("email")}} placeholder="ingrese mail" textoAyuda="este campo es obligatorio"/>
          <FormGroup label="CONTRASEÑA" type="password" register={{...register("password")}} placeholder="ingrese contraseña" textoAyuda="debe contener mayúsculas y números"/>
          <FormGroup label="CONFIRMAR CONTRASEÑA" type="password" register={{...register("confirmarpassword")}} placeholder="confirmar contraseña"/>
          <Button type="submit" variant="dark">REGISTRARME</Button>
          
          
        </form>
  
      </div>
    );
  
  
}

export default Registro;