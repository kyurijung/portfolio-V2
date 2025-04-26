import React from 'react';
import PropTypes from 'prop-types';

import ImageOutline from "/src/components/home/ImageOutline";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from "@fortawesome/free-solid-svg-icons"

function ProjectBlock({
  imageName,
  width,
  title,
  repoUrl,
  techStack,
  description
}) {
  return (
    <div className="flex items-center justify-between w-225">
      <ImageOutline imageName={imageName} width={width} />

      <div className="w-120">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:text-secondary transition"
        >
          <h2 className="text-subheading1 font-bold">{title}</h2>
          <FontAwesomeIcon icon={faLink} size="lg" />
        </a>

        <div className="flex flex-wrap gap-2 text-subheading2 font-bold text-secondary">
          {techStack.map((tech, index) => (
            <React.Fragment key={tech}>
              {index > 0 && ' • '}
              <span>{tech}</span>
            </React.Fragment>
          ))}
        </div>

        <ul className="mt-2 list-disc pl-5">
          <li className="text-primary text-body2">
            {description}
          </li>
        </ul>
      </div>
    </div>
  );
}

ProjectBlock.propTypes = {
  imageName: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired
};

export default ProjectBlock;
