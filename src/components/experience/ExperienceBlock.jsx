import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from "@fortawesome/free-solid-svg-icons"

ExperienceBlock.propTypes = {
  company: PropTypes.string.isRequired,
  url: PropTypes.number.isRequired,
  roles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function ExperienceBlock({
  company,
  url,
  roles
}) {
  return (
    <div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-primary hover:text-secondary transition leading-none"
      >
        <h2 className="text-subheading1 font-bold">{company}</h2>
        <FontAwesomeIcon icon={faLink} size="lg" />
      </a>

      {roles.map((role, index) => (
        <div key={index} className="mt-2">
          <div className="flex items-baseline justify-between w-225">
            <h3 className="text-subheading2 font-bold text-secondary">{role.title}</h3>
            <h3 className="text-subheading3 font-medium text-primary">{role.dates}</h3>
          </div>

          <ul className="ml-4 mt-2 space-y-1 list-disc pl-5 w-213">
            {role.points.map((point, pointIndex) => (
              <li key={pointIndex} className="text-body2 text-primary">
                {point.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ExperienceBlock;
