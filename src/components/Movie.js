import React, { useState, useEffect } from 'react';

import MovieList from './MovieList';

function Movie(){

	const [products,setProducts] = useState({});
	useEffect(() => {
		fetch('http://localhost:3050/api/productos')
		.then((response) => response.json())
         .then((data) => {

            setProducts(data);
		 }).catch((err) => {
            console.log(err.message);
         });
		 
	},[])
	if(products.length == 0){

		return <p>cargando</p>
	  } else{
	   console.log(products)
	  }

    return(
        <React.Fragment>
           
        </React.Fragment>
    )
}
export default Movie;