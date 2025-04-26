import PropTypes from "prop-types"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBarItem({ icon, to }) {
  return (
    <a 
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center h-14 w-14 rounded-full bg-primary hover:bg-secondary transition"
    >
      <FontAwesomeIcon icon={icon} size="xl" className="text-white" />
    </a>
  );
}

NavBarItem.propTypes = {
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavBarItem;
