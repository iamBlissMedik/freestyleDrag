import "./assets/index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  // const handleDragDrop = (results) => {
  //   const { source, destination, type } = results;
  //   if (!destination) return;
  //   if (
  //     source.droppableId === destination.droppableId &&
  //     source.index === destination.index
  //   )
  //     return;
  //   if (type === "group") {
  //     const reorderedStores = [...images];
  //     const sourceIndex = source.index;
  //     const destinationIndex = destination.index;
  //     const [removedStore] = reorderedStores.splice(sourceIndex, 1);
  //     reorderedStores.splice(destinationIndex, 0, removedStore);
  //     return setImages(reorderedStores);
  //   }
  // };

  // target id will only be set if dragging from one dropzone to another.

  function onChange(sourceId, sourceIndex, targetIndex) {
    const nextState = swap(images, sourceIndex, targetIndex);
    setImages(nextState);
  }

  useEffect(() => {
    const getImages = async () => {
      const res = await axios.get(
        `https://pixabay.com/api/?key=${
          import.meta.env.VITE_PIXABAY_API_KEY
        }&q=${term}&image_type=photo`
      );
      const data = res.data;
      setImages(data.hits);
      setIsLoading(false);
    };
    getImages();
  }, [term]);
  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <div className="text-6xl text-center mx-auto mt-32">
          No Images Found
        </div>
      )}
      {isLoading ? (
        <div className="text-6xl text-center mx-auto mt-32">Loading..</div>
      ) : (
        <GridContextProvider onChange={onChange}>
          <GridDropZone
            id="images"
            boxesPerRow={3}
            className="grid-cols-2"
            rowHeight={300}
            style={{ height: 280 * Math.ceil(images.length / 3) }}
          >
            {images.map((image, index) => (
              <GridItem key={image.id}>
                <ImageCard image={image} index={index} />
              </GridItem>
            ))}
          </GridDropZone>
        </GridContextProvider>

        // <div className="grid grid-cols-3 gap-4">
        //   {images.map((image, index) => (
        //     <ImageCard key={image.id} image={image} index={index} />
        //   ))}
        // </div>
      )}
    </div>
  );
}

export default App;
