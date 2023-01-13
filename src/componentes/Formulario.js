import React, {Fragment, useState} from 'react';
import { calcularTotal } from '../helpers';

const Formulario = (props) => {

    const {cantidad, cantidadState, plazo, plazoState, total, totalState, cargandoState} = props;

    const [error, errorState] = useState(false);
    // Definir el state (el cuál se utiliza para elementos dinamicos en tu aplicación)

    // el state te regresa dos valores 1-> variable que va a contener un valor, 2-> función para guardar e interactuar el state 


    // const leerCantidad = (e) =>{

    //     cantidadState( parseInt(e.target.value) );
    //     //console.log(e.target.value);
        
    // }

    // ****** Cuando el usuario haga submit *********

    const calcularPrestmo = e => {

        e.preventDefault();

        // Validar
        if(!cantidad || !plazo){
            
            errorState(true);
            return;
            
        }

        errorState(false);
        // Realizar la cotización

        cargandoState(true);

        // Habilitar Spinner

        setTimeout(() => {
            
            const total = calcularTotal(cantidad,plazo);
            
            totalState(total);

            cargandoState(false);

        }, 3000);


        console.log(total);
        
    }

    return(
    <Fragment>    
        <form onSubmit={ calcularPrestmo } >
            <div className="row">
                <div>
                    <label>Cantidad Prestamo</label>
                    <input 
                        className="u-full-width" 
                        type="number" 
                        placeholder="Ejemplo: 3000" 
                        onChange={ e => cantidadState( parseInt(e.target.value) ) }
                    />
                </div>
                <div>
                    <label>Plazo para Pagar</label>
                    <select 
                        className="u-full-width"
                        onChange={ e => plazoState( parseInt(e.target.value) ) }
                    >
                        <option value="">Seleccionar</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="Calcular" 
                        className="button-primary u-full-width" 
                    />
                </div>
            </div>
        </form>

        { (error) ?  <p className="error" >Todos los campos son obligatorios</p> : null }
       

    </Fragment>
    );
}

export default Formulario;