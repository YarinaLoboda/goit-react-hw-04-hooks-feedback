import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <>
    <p>{title}</p>
    {children}
  </>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
