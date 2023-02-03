import styles from './notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <h3 className={styles.title}>{message}</h3>;
};

export default Notification;

Notification.propTypes = { message: PropTypes.string.isRequired };
