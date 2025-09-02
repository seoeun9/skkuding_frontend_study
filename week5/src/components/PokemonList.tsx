import { BrowserRouter as Router, Link } from 'react-router-dom';
import PokemonItem from "./PokemonItem"
import PokemonDetail from './PokemonDetail';
import { useClickStore } from '../store/useClick';

export default function PokemonList(){
    const { clicked, setClicked } = useClickStore();

    return (
      <Router>
        <div className='body'>
            <Link to="/" className="Link">
              <div className="title">
                <span className="h1" onClick={() => setClicked(false)}>
                    <b>Pokemon List</b>
                </span>
              </div>
            </Link>
            {clicked ? <PokemonDetail /> : <PokemonItem />}
        </div>
      </Router>
    );;
}