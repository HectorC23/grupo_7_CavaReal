import { useParams } from "react-router-dom";
import Card from "../components/ContentRow/Card";
import { Component, useState, useEffect  } from "react";

function MovieView(){

    const { title } = useParams();
    const [ movie, setMovie ] = useState('');
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        async function getMovie (){
            const response = await fetch(`https://www.omdbapi.com/?apikey=bb175bc2&t=${title}`);
            const data = await response.json();
            
            if(response.status === 200){
                setMovie(data);
                setLoading(false);
            }
        }
        getMovie();
    }, []);

    return(
        <>
            {
                loading && <h1>Cargando...</h1>
            }
            { !loading && <Card titulo={movie?.Title}>
                <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '40rem' }} src={movie?.Poster} alt={movie? movie.Title : 'No encontrada'} />
                </div>
                <p>{movie?.Plot}</p>
                <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
            </Card>
            }
    </>
    )
}

export default MovieView;