import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';




function ContentRowTop(){



    const [postes, setPostes] = useState([]);
useEffect(() => {
    fetch('http://localhost:3050/api/productos')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setPostes(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);
 let categorys = postes.categorias
 console.log(categorys)

 





let productInDataBase = {
    color:   "primary",
    titulo: "Usuarios Registrados",
    valor: postes.cantUser,
    icono: "fas fa-film",
}

let amount ={
    color:   "success",
    titulo: "Cantidad de Colores",
    valor: postes.cantCategory,
    icono: "fas fa-award",
}

let user = {
    color:   "warning",
    titulo: "Cantidad de Productos",
    valor: postes.count,
    icono: "fas fa-user",
}
let cardProps = [productInDataBase,amount,user];





 if(postes.length == 0){

    return <p>cargando</p>
  } else{
   console.log(postes)
   return (
    
    <div className="row">
        
        {cardProps.map( (movie, i) => {

            return <SmallCard {...movie} key={i}/>
        
        })}

    </div>
)
}
}
export default ContentRowTop;