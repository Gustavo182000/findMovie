import Card from './Cards/Card';
import { useEffect, useState } from 'react';
import api from '../services/Api'


function EmBreve() {

    let [filmes, SetFilmes] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    useEffect( () => {

        async function getFilmes(){
            const response = await api.get('/movie/upcoming', {
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                    language: 'pt-BR',
                    page: 1
                }
            })
            console.log(response.data.results);
            SetFilmes(response.data.results);
        }

        getFilmes()
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, [])



    return (
        <div>
            <h4>Em breve</h4>
            {isLoading ? (
                <div className="lds-ripple"><div></div><div></div></div>
            ) : (
                <div className='container'>
                    <div className='row'>
                        {filmes.map((filme) => (
                            <div key={filme.id} className='col-lg-2 col-md-3 col-sm-4 col-xs-12'>

                                <Card titulo={filme.title} poster_path={filme.poster_path} vote_average={filme.vote_average} release_date={filme.release_date} id={filme.id} />
                            </div>

                        ))}

                    </div>
                </div>
            )}
        </div>




    )
}

export default EmBreve;