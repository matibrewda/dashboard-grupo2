import React, { useState, useEffect } from 'react';
import Genre  from './Genre';



let genres = [
    {genre: 'Acción'},
    {genre: 'Animación'},
    {genre: 'Aventura'},
    {genre: 'Ciencia Ficción'},
    {genre: 'Comedia'},
    {genre: 'Documental'},
    {genre: 'Drama'},
    {genre: 'Fantasia'},
    {genre: 'Infantiles'},
    {genre: 'Musical'}
]


function GenresInDb(){
    const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('http://localhost:3050/api/productos')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
   if(posts.length == 0){

    return <p>cargando</p>
  } else{
   console.log(posts)
    return (
        
        <React.Fragment>
            
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Colores Disponibles</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    posts.categorias.map((genre,index)=>{
                                        console.log(genre.color)
                                        return  <Genre  {...genre}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )
                            }
}
export default GenresInDb;