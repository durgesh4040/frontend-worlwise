//import PropTypes from "prop-types"; // Import PropTypes

import styles from "./CountryList.module.css";

import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useCities } from "../Contexts/ContextCities";

export default function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add the city when no city is there " />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <div>
      <ul className={styles.CountryList}>
        {countries.map((country) => (
          <CountryItem country={country} key={country.id} />
        ))}
      </ul>
    </div>
  );
}

// Add prop validation using PropTypes
// CountryList.propTypes = {
//   cities: PropTypes.array.isRequired, // An array is required
//   isLoading: PropTypes.bool.isRequired, // A boolean is required
// };
