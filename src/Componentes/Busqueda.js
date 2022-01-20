import React, { Component } from 'react';
import {getAllPersonajes} from "../ProductosServicios/ProductosServ"
import Personajes from '../Componentes/Personajes';
import {Row} from 'react-bootstrap'

const styles={
    cardContainer:{
      width: 'auto',
      margin: "auto auto",
    },
    cardBody:{

    }
  }

class Busqueda extends Component {
    state={
        busqueda:"",
        personajes_filtrados:[]
    }

    onChange=async e=>{
        e.persist();
        await this.setState({busqueda: e.target.value});
        const response = await getAllPersonajes(this.state.busqueda);
        if(response.data.results){
            //toString y toLowerCase incluye búsqueda por minúsculas y por cadenas de letras
            const result = response.data.results.filter(item => item.name.toString().toLowerCase().includes(this.state.busqueda))
            await this.setState({personajes_filtrados: result});
            console.log(this.state.personajes_filtrados)
        }
    }
      render(){
          
    return (
        <>
        <div className="input-group">
        <input type="search" className="form-control rounded" placeholder="Buscar por Nombre" aria-label="Buscar"
        aria-describedby="search-addon" value={this.state.busqueda} onChange={this.onChange}/>
        <button type="button" className="btn btn-outline-primary">Buscar</button>
        </div>
        <div style={styles.cardContainer}>
        <Row xs={"auto"} md={"auto"} className="auto">
      {Array.from({ length: 1 }).map((_, idx) => (
        <>
      {this.state.personajes_filtrados.map(todosPersonajes=><Personajes chicharron={todosPersonajes} />)}
      </>
      ))}
  </Row>
        </div>
        </>

        );
    }
}

export default Busqueda; 