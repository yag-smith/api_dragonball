const Card = ({ character }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img 
          src={character.image} 
          className="card-img-top p-3" 
          alt={character.name} 
          style={{ height: '300px', objectFit: 'contain' }} 
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{character.name}</h5>
          <p className="card-text">
            <strong>Raza:</strong> {character.race} <br/>
            <strong>Ki:</strong> {character.ki}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;