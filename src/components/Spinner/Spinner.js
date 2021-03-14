import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Spinner.scss';
import PropTypes from 'prop-types';

const Spinner = ({ isVisible = true }) => (
  <Loader
    type="BallTriangle"
    color="#00BFFF"
    className="Loader"
    height={70}
    width={70}
    visible={isVisible}
  />
);

Spinner.propTypes = {
  isVisible: PropTypes.bool,
};

export default Spinner;
