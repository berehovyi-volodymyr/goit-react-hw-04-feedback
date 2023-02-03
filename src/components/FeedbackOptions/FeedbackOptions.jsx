import PropTypes from 'prop-types';
import styles from './feedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const elements = options.map(option => (
    <button
      className={styles.button}
      type="button"
      onClick={() => onLeaveFeedback(option)}
      key={option}
    >
      {option}
    </button>
  ));

  return elements;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
