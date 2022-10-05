import React, { useState, useEffect } from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';
function ContentRowTop(){
	
	
	const [product,setProduct] = useState({});
	useEffect(() => {
		fetch('http://localhost:3050/api/productos/lastElement')
		.then((response) => response.json())
         .then((data) => {

            setProduct(data);
		 }).catch((err) => {
            console.log(err.message);
         });
		 
	},[])
	if(!product){

		return <p>cargando</p>
	  } else{
	   console.log(product)
	  }


    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto Agregado: BMW {product.modelo}</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={product.foto} alt=" Star Wars - Mandalorian "/>
									</div>
									<p>Modelo: BMW {product.modelo} </p>
									<p>Precio: ${product.precio} </p>
									<p>Año: {product.anio} </p>
									<p>Color: {product.color} </p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href={product.url}>View movie detail</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<GenresInDb />

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;