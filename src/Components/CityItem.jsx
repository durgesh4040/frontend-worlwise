import PropTypes from "prop-types"; // Import PropTypes
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "../Contexts/ContextCities";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));
export default function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();

  console.log(`items`, city);
  const { cityName, emoji, date, id, position } = city;

  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
    console.log("test");
  }
  return (
    <li>
      {
        <Link
          className={`${styles.cityItem} ${
            id === currentCity.id
          } ?style["cityItem--active"] :""`}
          to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        >
          <span className={styles.emoji}>{emoji}</span>
          <h3 className={styles.cityName}>{cityName}</h3>
          <time className={styles.date}>{formatDate(date)}</time>
          <button className={styles.deleteBtn} onClick={handleClick}>
            &times;
          </button>
        </Link>
      }
    </li>
  );
}

// Add prop validation using PropTypes
CityItem.propTypes = {
  city: PropTypes.string.isRequired, // Assuming that city is a string
};
