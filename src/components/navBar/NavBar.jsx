import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">FindMovie</Link>
        <ul className="nav">
          <li className="nav-item">
            <Link to='/' className="nav-link">Populares</Link>
          </li>
          <li className="nav-item">
            <Link to='/classificados' className="nav-link">Melhores Classificados</Link>
          </li>
          <li className="nav-item">
            <Link to='/lancamentos' className="nav-link">Lançamentos</Link>
          </li>
          <li className="nav-item">
            <Link to='/embreve' className="nav-link">Em breve</Link>
          </li>
          <li className="nav-item">
            <Link to='/favoritos' className="nav-link">Favoritos</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}


export default NavBar; 