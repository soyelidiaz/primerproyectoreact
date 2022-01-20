import React from 'react';
import { useForm } from "react-hook-form";
import FormGroup from '../Componentes/FormularioGen';
import Button from 'react-bootstrap/Button'
import firebase from '../Configuracion/firebase';


function Login() {
    const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => 
  {try
    {
        const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
        console.log(responseUser.user.uid)
}catch(e){
  console.log(e)
}
window.location.href="/"
} 

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <FormGroup label="EMAIL" type="email" register={{...register("email")}} placeholder="ingrese mail" textoAyuda="este campo es obligatorio"/>
          <FormGroup label="CONTRASEÑA" type="password" register={{...register("password")}} placeholder="ingrese contraseña" textoAyuda="debe contener mayúsculas y números"/>
        
          <Button type="submit" variant="dark">INGRESAR</Button>
          
        </form>
  
      </div>
    );
}
 

export default Login;