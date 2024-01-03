//import PropTypes from "prop-types"; // Import PropTypes

import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../Contexts/ContextCities";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";

export default function CityList() {
  const { cities, isLoading } = useCities();
  // const [listCity, setListCity] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8080/backend/getAllCity"
  //       );

  //       console.log("login-data", response.data);

  //       setListCity(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  console.log("hell0");
  console.log(`cities list${cities}`);
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add the city when no city is there " />;
  console.log(cities);
  return (
    <div>
      <ul className={styles.CityList}>
        {cities.map((city) => (
          <>
            <CityItem city={city} key={city.id} />
            <p>{city.cityName}</p>
          </>
        ))}
      </ul>
    </div>
  );
}

// Add prop validation using PropTypes
CityList.propTypes = {
  //cities: PropTypes.array.isRequired, // An array is required
  // isLoading: PropTypes.bool.isRequired, // A boolean is required
};
