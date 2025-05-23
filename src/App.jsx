import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Form from "./component/Form";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import CityList from "./component/CityList";
import { useState, useEffect } from "react";
import CountryList from "./component/CountryList";
import City from "./component/City";

const BASE_URL = " http://localhost:9000";
function App() {
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
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          {/*index route is the default route that shows when none of the below routes is mathed*/}
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          {/*nested routes*/}
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<City />} />

          <Route
            path="Countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//we need to config eslint manually every time we create a new
//project  and save them as dependencies by running the following command:
//npm install eslint vite-plugin-eslint eslint-config-react-app --save-dev
