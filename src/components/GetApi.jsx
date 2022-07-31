import { useEffect, useState } from "react";
import Page from "./Page";
import Personaje from "./Personaje";
const GetApi = () => {
  const [personajes, setPersonaje] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApi();
  }, [page]);
  const getApi = async () => {
    try {
      const respuesta = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await respuesta.json();
      console.log(data);
      setLoading(false);
      setPersonaje(data.results);
      if (page === 0 || page >= 42) {
        return setPage(1);
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center text-white display-4 mt-4">
              Personajes de Rick and Morty
            </h1>
            <Page page={page} setPage={setPage} />
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              <div className="row m-2">
                {personajes.map((personaje) => (
                  <Personaje key={personaje.id} personaje={personaje} />
                ))}
              </div>
            )}

            <Page page={page} setPage={setPage} />
          </div>
        </div>
      </section>
    </>
  );
};

export default GetApi;
