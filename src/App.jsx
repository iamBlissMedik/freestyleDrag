import "./assets/index.css";
// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import axios from "axios";

// import ImageCard from "./components/ImageCard";
// import ImageSearch from "./components/ImageSearch";
import { useAuth0 } from "@auth0/auth0-react";
// import { DndContext, closestCenter } from "@dnd-kit/core";
// import {
//   SortableContext,
//   arrayMove,
//   horizontalListSortingStrategy,
//   rectSortingStrategy,
//   useSortable,
// } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
import LoginButton from "./components/LoginButton";
import LogOutButton from "./components/LogOutButton";
import HomePage from "./components/HomePage";

// const SortableUser = ({ image }) => {
//   const { attributes, listeners, setNodeRef, transform, transition } =
//     useSortable({ id: image.id });
//   const style = {
//     transition,
//     transform: CSS.Transform.toString(transform),
//   };
//   return (

//     <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
//       <ImageCard image={image} />
//     </div>
//   );
// };
// SortableUser.propTypes = {
//   image: PropTypes.object.isRequired,
// };

function App() {
  const { isLoading, error, isAuthenticated } = useAuth0();
  // const [images, setImages] = useState([]);
  // const [isLoadingg, setIsLoading] = useState(true);
  // const [term, setTerm] = useState("");
  // const onDragEnd = (e) => {
  //   const { active, over } = e;
  //   if (active.id === over.id) {
  //     return;
  //   }
  //   setImages((images) => {
  //     const oldIndex = images.findIndex((user) => user.id === active.id);
  //     const newIndex = images.findIndex((user) => user.id === over.id);
  //     return arrayMove(images, oldIndex, newIndex);
  //   });
  // };
  // useEffect(() => {
  //   const getImages = async () => {
  //     const res = await axios.get(
  //       `https://pixabay.com/api/?key=${
  //         import.meta.env.VITE_PIXABAY_API_KEY
  //       }&q=${term}&image_type=photo`
  //     );
  //     const data = res.data;
  //     setImages(data.hits);
  //     setIsLoading(false);
  //   };
  //   getImages();
  // }, [term]);
  return (
    <div className="container mx-auto">
      {error && <p>Authentication error</p>}
      {!error && isLoading && <p>loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <LogOutButton />
          {isAuthenticated && <HomePage />}
          {/* <div>
            <ImageSearch searchText={(text) => setTerm(text)} />
            {!isLoadingg && images.length === 0 && (
              <div className="text-6xl text-center mx-auto mt-32">
                No Images Found
              </div>
            )}
            {isLoadingg ? (
              <div className="text-6xl text-center mx-auto mt-32">
                Loading..
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <DndContext
                  collisionDetection={closestCenter}
                  onDragEnd={onDragEnd}
                >
                  <SortableContext
                    items={images}
                    strategy={rectSortingStrategy}
                  >
                    {images.map((image) => (
                      <SortableUser key={image.id} image={image} />
                    ))}
                  </SortableContext>
                </DndContext>
              </div>
            )}
          </div> */}
        </>
      )}
    </div>
  );
}

export default App;
