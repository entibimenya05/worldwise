import { Link } from "react-router-dom";
import PageNav from "../component/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>WorldWise</h1>
      {/* <a href="/pricing">Pricing</a>*/}
      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default Homepage;
