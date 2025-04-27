// ----------------------------
// IMPORTS SECTION
// ----------------------------

// Prop type validation
import PropTypes from "prop-types"

// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// ----------------------------
// PROP TYPE DEFINITIONS
// ----------------------------

NavBarItem.propTypes = {
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

// ----------------------------
// COMPONENT DEFINITION
// ----------------------------

/**
 * NavBarItem displays clickable icon links to external sources.
 * 
 * @component
 * @param {string} icon - Corresponding FontAwesome icons
 * @param {string} to - External link
 * @returns {React.ReactElement} NavBar item component
 */
function NavBarItem({ icon, to }) {
  return (
    <a 
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center h-14 w-14 rounded-full bg-primary hover:bg-secondary transition"
    >
      {/* Display the FontAwesome icon on a circular background */}
      <FontAwesomeIcon icon={icon} size="xl" className="text-white" />
    </a>
  );
}

export default NavBarItem;
