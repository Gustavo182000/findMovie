import { useEffect } from "react";
import Card from './Cards/Card';
import api from '../services/Api'
import { useState } from "react";


function Favoritos() {


    let [filmes, setFilmes] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    useEffect((e) => {
        let filmesId = [];
        async function getFilmes() {
            if (localStorage.hasOwnProperty("filmesFav")) {
                filmesId = JSON.parse(localStorage.getItem("filmesFav"))

                for (let i = 0; i < filmesId.length; i++) {
                    const response = await api.get(`/movie/${filmesId[i]}`, {
                        params: {
                            api_key: process.env.REACT_APP_API_KEY,
                            language: 'pt-BR'
                                       
                        }
                    })

                    console.log(response.data.id)
                    setFilmes(filmes => [...filmes, response.data])
                }
            }
            console.log(filmes)
        }

        getFilmes()
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);


    }, [])


    return (
        <div>
            <h4>Favoritos</h4>
            {isLoading ? (
                <div className="lds-ripple"><div></div><div></div></div>
            ) : (
                <div className='container'>
                    <div className='row'>
                        {filmes.map((filme) => (
                            <div key={filme.id} className='col-lg-2 col-md-3 col-sm-4 col-xs-12'>

                                <Card titulo={filme.title} poster_path={filme.poster_path} vote_average={filme.vote_average} release_date={filme.release_date} id={filme.id}/>
                            </div>

                        ))}

                    </div>
                </div>
            )}
        </div>
    )
}


export default Favoritos;