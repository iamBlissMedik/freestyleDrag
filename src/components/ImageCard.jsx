import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <Card
      sx={{
        marginRight: 2,
        marginBottom: 2,
        cursor: "-webkit-grab",
        maxHeight: 345,
      }}
    >
      <CardActionArea>
        <CardMedia
          className="pointer-events-none"
          component="img"
          sx={{
            height: 140,
          }}
          height="140"
          image={image.webformatURL}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            <div className="px-6 py-4 flex justify-center">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex text-center items-center bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    // <div className="max-w-sm rounded overflow-hidden shadow-lg">
    //   <img src={image.webformatURL} alt="" className="w-full h-[140px]" />
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-purple-500 text-xl mb-2">
    //       Photo by {image.user}
    //     </div>
    //     <ul>
    //       <li>
    //         <strong>Views</strong>
    //         {image.views}
    //       </li>
    //       <li>
    //         <strong>Downloads</strong>
    //         {image.downloads}
    //       </li>
    //       <li>
    //         <strong>Likes</strong>
    //         {image.likes}
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="px-6 py-4">
    //     {tags.map((tag, index) => (
    //       <span
    //         key={index}
    //         className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
    //       >
    //         {tag}
    //       </span>
    //     ))}
    //   </div>
    // </div>
  );
};
ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
export default ImageCard;
