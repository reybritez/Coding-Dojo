import ShowFilms from "../components/Films";
import ShowPeople from "../components/People";
import ShowPlanets from "../components/Planets";
import ShowSpecies from "../components/Species";
import ShowStarships from "../components/Starships";
import ShowVehicles from "../components/Vehicles";
import { getData, getHomeworld } from "../API";
import { useState } from "react";

function App() {
  const [dataState, setDataState] = useState(null);
  const [categoryState, setCategoryState] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const category = e.target.category.value;
    const id = e.target.id.value;
    await fechStates(category, id);
    setCategoryState(category);
  };

  const fechStates = async (category, id) => {
    try {
      setIsLoading(true);
      const state = (await getData(category, id)) ?? null;

      if (category === "people") {
        const homeworld = await getHomeworld(state.homeworld);
        setDataState({ ...state, homeworld: homeworld.name });
      } else setDataState(state);
    } catch (error) {
      setDataState(null);
      console.log("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const cards = {
    people: <ShowPeople dataState={dataState} />,
    planets: <ShowPlanets dataState={dataState} />,
    films: <ShowFilms dataState={dataState} />,
    species: <ShowSpecies dataState={dataState} />,
    vehicles: <ShowVehicles dataState={dataState} />,
    starships: <ShowStarships dataState={dataState} />,
  };

  function cardToShow() {
    if (!categoryState) return;
    if (isLoading) return <p>Loading...</p>;
    if (!dataState)
      return (
        <div>
          <p>No encontramos lo que estás buscando.</p>
          <img
            src="https://www.looper.com/img/gallery/nearly-34-are-most-excited-about-this-upcoming-star-wars-show/l-intro-1628480432.jpg"
            alt="Configuramos para el orto esto viste"
            height="250px"
            width="450px"
          />
        </div>
      );
    return cards[categoryState];
  }

  return (
    <div className="container">
      <h1>Star Wars API</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Search for:
          <select id="category">
            <option value="people">People</option>
            <option value="planets">Planets</option>
            <option value="films">Films</option>
            <option value="species">Species</option>
            <option value="vehicles">Vehicles</option>
            <option value="starships">Starships</option>
          </select>
        </label>
        <label>
          INSERT ID N°:
          <input type="text" id="id" />
        </label>
        <button type="submit">Search</button>
      </form>

      {cardToShow()}
    </div>
  );
}

export default App;
