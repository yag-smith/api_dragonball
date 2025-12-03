import { useEffect } from 'react';
import { useStore } from '../store/store';
import Card from '../components/Card';

const Entities = () => {
  const { characters, links, fetchCharacters, loading } = useStore();

  useEffect(() => {
    fetchCharacters(); 
  }, []);

  if (loading) return <div className="text-center mt-5"><h2>CARGANDO Ki...</h2></div>;

  return (
    <div>
      <h2 className="mb-4 text-center">Lista de zayanines</h2>
      <div className="row">
        {characters.map((char) => (
          <Card key={char.id} character={char} />
        ))}
      </div>

      {/* Paginación */}
      <div className="d-flex justify-content-between my-5">
        <button 
          className="btn btn-dark" 
          disabled={!links.previous} 
          onClick={() => fetchCharacters(links.previous)}
        >
          ← Anterior
        </button>
        
        <button 
          className="btn btn-dark" 
          disabled={!links.next} 
          onClick={() => fetchCharacters(links.next)}
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
};
export default Entities;