import PropTypes from "prop-types";
import styles from "./Button.module.css";

export default function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a valid node
  onClick: PropTypes.func, // Allow onClick to be a function or undefined
  type: PropTypes.oneOf(["primary", "secondary", "danger"]), // Ensure type is one of these strings
};
