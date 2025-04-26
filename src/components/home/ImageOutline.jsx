import PropTypes from 'prop-types';

function ImageOutline({ imageName, width }) {
  return (
    <div className="overflow-visible w-fit">
      <div className="border-4 border-primary h-fit -mr-3 -mb-3" style={{ width: `${width}rem` }}>
        <img
          className="w-full relative right-3 bottom-3"
          src={`/src/assets/images/${imageName}.png`}
        />
      </div>
    </div>
  );
}

ImageOutline.propTypes = {
  imageName: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default ImageOutline;
