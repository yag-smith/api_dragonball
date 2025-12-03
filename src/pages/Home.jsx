import { useEffect } from 'react';
import { useStore } from '../store/store';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Home = () => {
  const { characters, fetchCharacters } = useStore();

  useEffect(() => {
    if (characters.length === 0) fetchCharacters();
  }, []);

  return (
    <div>
      { }
      <div className="p-5 mb-4 bg-light rounded-3 text-center border">
        <h1 className="display-5 fw-bold text-warning">Mundo Dragon Ball</h1>
        <Link to="/entities" className="btn btn-warning btn-lg fw-bold">Ver Todos los Personajes</Link>
      </div>

      {}
      <h3 className="mb-3 mt-5">Personajes Destacados</h3>
      <div className="row">
        {characters.slice(0, 6).map((char) => (
          <Card key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
};
export default Home;