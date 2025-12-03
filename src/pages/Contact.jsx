import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Por favor llena los campos requeridos");
      return;
    }
    alert(`¡Gracias ${formData.name}! Mensaje enviado a Capsule Corp.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6 border p-4 rounded shadow-sm bg-white">
        <h2 className="mb-3 text-center">Contáctanos</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input 
              type="text" 
              className="form-control" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mensaje</label>
            <textarea 
              className="form-control" 
              rows="3"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;