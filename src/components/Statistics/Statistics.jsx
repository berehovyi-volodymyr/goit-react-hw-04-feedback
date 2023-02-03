import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <div className={styles.qty}>
        <p>
          <span className={styles.mark}>Good:</span>
          {good}
        </p>
        <p>
          <span className={styles.mark}>Neutral:</span>
          {neutral}
        </p>
        <p>
          <span className={styles.mark}>Bad:</span>
          {bad}
        </p>
      </div>
      <div className={styles.statistics}>
        <p>
          <span className={styles.mark}>Total:</span>
          {total}
        </p>
        <p>
          <span className={styles.mark}>Positive feedback:</span>
          {positivePercentage}%
        </p>
      </div>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
