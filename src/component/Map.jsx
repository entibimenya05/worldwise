import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
function Map() {
  const navigate = useNavigate();
  //in order to read the lat and lng,useSearchParams
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    //programatic navigation: moving to a new page without clicking on any link
    //usually moving to a Form or after submitting a form
    //attach an event handler and then our function as shown below

    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Position:{lat},{lng}
      </h1>
      <button onClick={() => setSearchParams({ lat: 23, lng: 50 })}>
        Change position
      </button>
    </div>
  );
}

export default Map;
