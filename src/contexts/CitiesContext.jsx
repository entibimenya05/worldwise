import { createContext, useState, useEffect } from "react";
const BASE_URL = " http://localhost:9000";

//step1:create context
const CitiesContext = createContext();
//next step is to create the provider component
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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

  //3.reading the values from the CitiesContext;the firstcurly bracelet is entering the javascript mode, the second is the object
  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}

export { CitiesProvider };
