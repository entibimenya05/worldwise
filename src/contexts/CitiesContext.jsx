import { createContext, useState, useEffect, useContext } from "react";
const BASE_URL = " http://localhost:9000";

//step1:create context
const CitiesContext = createContext();
//next step is to create the provider component
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading data ...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  //create a function that loads the cities then call it in City.jsx
  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("There was an error loading data ...");
    } finally {
      setIsLoading(false);
    }
  }
  //creating a new city
  //create a function that loads the cities then call it in City.jsx
  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      //updating the cities manually to be replaced later by react query
      setCities((cities) => [...cities, data]);
    } catch {
      alert("There was an error loading data ...");
    } finally {
      setIsLoading(false);
    }
  }
  //3.reading the values from the CitiesContext;the firstcurly bracelet is entering the javascript mode, the second is the object
  return (
    <CitiesContext.Provider
      value={{ cities, isLoading, currentCity, getCity, createCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
//2nd part creating the custom hook to consumer the CitiesContext everywhere in the application
function useCities() {
  //which context to read the data from, here is CitiesContext
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside CitiesProvider");
  return context;
}
export { CitiesProvider, useCities };
