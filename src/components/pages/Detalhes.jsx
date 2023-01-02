import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import api from '../services/Api'
import './Detalhes.css'
function Detalhes() {

    let { id } = useParams();
    let [filme, setFilme] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    let [video, setVideo] = useState();

    useEffect(() => {
        async function getFilmes() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                    language: 'pt-BR'
                }
            })
                .then((response) => {
                    console.log(response.data);
                    setFilme(response.data);
                })
                .catch(() => {
                    console.log('Filme nao encontrado')
                    window.location.replace('/');
                })



        }
        async function getVideo() {
            await api.get(`/movie/${id}/videos`, {
                params: {
                    api_key: process.env.REACT_APP_API_KEY
                }
            }).then((response) => {
                console.log(response.data.results[0].key)
                setVideo(response.data.results[0].key)
            })
                .catch((e) => {
                    console.log('Trailer nao encontrado')
                })


        }

        getFilmes()
        getVideo()
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);

    }, [])


    return (
        <div>
            <div className="container">
                {isLoading ? (
                    <div className="lds-ripple"><div></div><div></div></div>
                ) : (


                    <div className="row">
                        <div className="col">
                            <h2>{filme.title}</h2>
                            <figcaption className="blockquote-footer">{filme.release_date}</figcaption>
                            <div>
                                <embed className="embed-responsive-item" src={'https://www.youtube.com/embed/' + video} />
                            </div>

                            <div className="generos">
                                <h5>Gêneros: </h5> {filme.genres.map((genero) => (
                                    <h6 key={genero.id}>{genero.name}</h6>
                                ))}
                            </div>
                            <h5>{filme.overview}</h5>

                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}



export default Detalhes;