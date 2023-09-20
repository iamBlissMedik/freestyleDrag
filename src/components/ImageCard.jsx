import PropTypes from "prop-types";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="max-w-sm h-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center touch-none">
      <div className="h-[200px] flex justify-center   mx-auto">
        <img
          src={image.webformatURL}
          alt=""
          className="rounded-t-lg object-fill "
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views</strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads</strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes</strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
};
export default ImageCard;
