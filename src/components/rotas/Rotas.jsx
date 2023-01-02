import { Routes, Route } from 'react-router-dom'
import Classificados from '../pages/Classificados';
import Detalhes from '../pages/Detalhes';
import EmBreve from '../pages/EmBreve';
import Favoritos from '../pages/Favoritos';
import Home from '../pages/Home'
import Lancamentos from '../pages/Lancamentos';



function Rotas() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/classificados" element={<Classificados />} />
            <Route exact path="/lancamentos" element={<Lancamentos />} />
            <Route exact path="/embreve" element={<EmBreve />} />
            <Route exact path="/favoritos" element={<Favoritos />} />
            <Route exact path="/detalhes/:id" element={<Detalhes />} />

        </Routes>
    )
}



export default Rotas;