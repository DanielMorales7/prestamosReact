import React, { Fragment, useState } from 'react';
import Header from './componentes/Header.js';
import Formulario from './componentes/Formulario.js';
import Mensaje from './componentes/Mensaje.js';
import Resultado from './componentes/Resultado.js';
import Spinner from './componentes/Spinner.js';


function App() {

  const [cantidad, cantidadState] = useState(0);
  const [plazo, plazoState]       = useState('');
  const [total, totalState]       = useState(0);
  const [cargando, cargandoState] = useState(false);

  let componente;
  if(cargando){
    componente = <Spinner/>
  }else if(total===0){
    componente = <Mensaje />
  }else{
    componente = <Resultado total={total} plazo ={plazo} cantidad={cantidad} />
  }
  // (total === 0) ? componente = <Mensaje /> : componente = <Resultado total={total} plazo ={plazo} cantidad={cantidad} />;

  return (
    <Fragment>
      {/* Así se manda a llamar un componente */}
      
      <Header
        titulo ="Cotizador de Prestamos"
      />

      <div className="container">
        <Formulario
          // prop y variable
          cantidad      = {cantidad}
          cantidadState = {cantidadState}
          plazo         = {plazo}
          plazoState    = {plazoState}
          total         = {total}
          totalState    = {totalState}
          cargandoState = {cargandoState}

        />

        {/* <p>Total a pagar: $ {total}</p> */}
        <div className='mensajes'>
          { componente }
        </div>
        
      </div>
    </Fragment>
  );
}

export default App;
