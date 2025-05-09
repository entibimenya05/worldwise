import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";

import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          {/*index route is the default route that shows when none of the below routes is mathed*/}
          <Route index element={<p>List of the cities</p>} />
          {/*nested routes*/}
          <Route path="cities" element={<p>List of Cities</p>} />
          <Route path="Countries" element={<p>Countries</p>} />
          <Route path="form" element={<p>Form</p>} />
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
