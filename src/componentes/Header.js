import React from 'react';

//un componente es una función

// El return te da la posibilidad de hacer codigo JS 

// function Header({titulo}){

//     return(
//         <Fragment>
//         <h1>{titulo}</h1>
//         </Fragment>
//     )

// }

const Header = ({titulo}) => (
    <h1>{titulo}</h1>
)

export default Header;