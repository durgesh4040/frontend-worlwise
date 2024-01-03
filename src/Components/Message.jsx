import styles from "./Message.module.css";
import PropTypes from "prop-types";
function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired, // An array is required
  //isLoading: PropTypes.bool.isRequired, // A boolean is required
};

export default Message;
