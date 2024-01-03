import styles from "./CountryItem.module.css";
import PropTypes from "prop-types"; // Import PropTypes
function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}
CountryItem.propTypes = {
  country: PropTypes.string.isRequired, // Assuming that city is a string
};

export default CountryItem;
