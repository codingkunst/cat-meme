import { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import MainCard from "./components/MainCard";
import Favorites from "./components/Favorites";

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

const fetchCat = async (text) => {
  let url = "https://cataas.com";
  let response = await fetch(`${url}/cat/says/${text}?json=true`);
  let data = await response.json();
  return `${url}/cat/${data._id}/says/${text}`;
}

function App() {
  const [count, setCount] = useState(() => {
    return jsonLocalStorage.getItem("count");
  });
  const countTitle = count === null ? "" : count + "번의 ";
  const [mainCat, setMainCat] = useState("https://i.sstatic.net/xcGlN.png");
  const [favorites, setFavorites] = useState(() => {
    return jsonLocalStorage.getItem("favorites") || [];
  });
  const alreadyFavorite = favorites.includes(mainCat);

  const setInitialCat = async () => {
    const newCat = await fetchCat("Hello Cat");
    setMainCat(newCat);
  }

  const updateMainCat = async (value) => {
    const newCat = await fetchCat(value);
    setMainCat(newCat);
    setCount((prev) => {
      const nextCount = prev + 1;
      jsonLocalStorage.setItem("count", nextCount);
      return nextCount;
    });
  }

  const handleHeartClick = () => {
    const nextFavorites = [...favorites, mainCat];
    setFavorites(nextFavorites);
    jsonLocalStorage.setItem("favorites", nextFavorites);
  }

  useEffect(() => {
    setInitialCat();
  }, []);

  return (
    <>
      <Title>{countTitle}여우 소환</Title>
      <Form updateMainCat={updateMainCat} />
      <MainCard
        img={mainCat}
        onHeartClick={handleHeartClick}
        alreadyFavorite={alreadyFavorite}
      />
      <Favorites favorites={favorites} />
    </>
  );
}

export default App;
