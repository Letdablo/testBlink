
import { Link } from 'react-router-dom';
import '../css/Home.scss';
import { useContext } from 'react';
import { ResultContext } from '../ResultContextProvider';

function Home() {
  const {responses} = useContext(ResultContext)
  return (
    <div className='home'>
      <div className="home-logo">
        <img className='logo' alt='Blinklearning logo' src='assets/img/logo.png' />
      </div>
      <div className="home-buttons">
        <Link className='button' to={`/test`} disabled={responses?.done}>Realizar prueba</Link>
        <Link className='button' to={`/results`} disabled={!responses?.done}>Ver resultados</Link>
      </div>
    </div>
  );
}

export default Home;
