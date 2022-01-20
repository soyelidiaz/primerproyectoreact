import React from 'react';
import Form from 'react-bootstrap/Form'

function FormularioGen(props) {
    const {label,type,register,placeholder,textoAyuda} = props
    return (
 
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{label}</Form.Label>
          <Form.Control type={type || "text"} {...register} placeholder={placeholder || ""} />
          <Form.Text className="text-muted">
           {textoAyuda || ""}
          </Form.Text>
        </Form.Group>
    );
  
  
}

export default FormularioGen;