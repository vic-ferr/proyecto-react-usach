const Personaje = ({ personaje }) => {
  return (
    <>
      <div className="col-12 col-md-4 col-lg-3">
        <article className="card text-center shadow mt-2 p-1 article-card">
          <img
            src={personaje.image}
            className="card-img-top"
            alt={personaje.name}
          />
          <div className="card-body">
            <h3 className="card-text text-white">{personaje.name}</h3>
            <p className="card-text text-white">{personaje.species}</p>
            <p className="card-text text-white">{personaje.status}</p>
          </div>
        </article>
      </div>
    </>
  );
};

export default Personaje;
