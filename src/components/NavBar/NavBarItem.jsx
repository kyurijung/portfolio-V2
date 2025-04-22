import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from "prop-types"

function NavBarItem({ icon, to }) {
  return (
    <a href={to} className="flex items-center justify-center w-14 h-14 rounded-full bg-primary hover:bg-secondary transition">
      <FontAwesomeIcon icon={icon} className="fa-xl text-white" />
    </a>
  );
}

export default NavBarItem;

NavBarItem.propTypes = {
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};