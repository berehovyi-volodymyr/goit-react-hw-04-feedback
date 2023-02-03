import PropTypes from 'prop-types';
import styles from './section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.title}>{title}</h3>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
