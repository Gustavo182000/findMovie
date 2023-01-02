import '../Cards/Card.css'
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { useEffect } from 'react';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

function Card(props) {





  useEffect((e) => {
    let filmes = [];

    if (localStorage.hasOwnProperty("filmesFav")) {
      filmes = JSON.parse(localStorage.getItem("filmesFav"))

      for (var i = 0; i < filmes.length; i++) {
        if (document.getElementById(filmes[i])) {
          document.getElementById(filmes[i]).textContent = '⛊';
        }
      }

    }

  }, [])

  function addFav(e) {
    let id = e.target.value;
    let filmes = [];
    if (e.target.textContent === '⛊') {
      e.target.textContent = '⛉';
      if (localStorage.hasOwnProperty("filmesFav")) {
        filmes = JSON.parse(localStorage.getItem("filmesFav"))
        if (filmes.indexOf(id) > -1) {
          filmes.splice(filmes.indexOf(id), 1);
          localStorage.setItem('filmesFav', JSON.stringify(filmes));
          swal("Filme removido com sucesso !", "", "success");
        }
      }
    } else { 
      e.target.textContent = '⛊';

      if (localStorage.hasOwnProperty("filmesFav")) {
        filmes = JSON.parse(localStorage.getItem("filmesFav"))
      }

      filmes.push(id)

      localStorage.setItem('filmesFav', JSON.stringify(filmes));
      swal("Filme adicionado com sucesso !", "", "success");
    }
  }



  return (
    <div>

      <div className='container'>
        <div className="card" >
          <button onClick={addFav} type="button" className='badge text-bg-secondary position-absolute top-0 start-100 translate-middle' value={props.id} id={props.id}>⛉</button>
          <div>
            <Link to={'/detalhes/' + props.id} className="nav-link"> 
            <img src={'https://image.tmdb.org/t/p/original/' + props.poster_path} className="card-img-top" alt="..." />
            </Link>
          </div>
          <div className="card-body" >
            <div className="card-text">{props.titulo}
              <p className="text-muted">
                <BsFillEmojiSmileFill /> {props.vote_average} / {props.release_date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Card;