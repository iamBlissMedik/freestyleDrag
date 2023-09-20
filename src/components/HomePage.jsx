import { useState, useEffect } from "react";

import axios from "axios";

import ImageSearch from "./ImageSearch";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  //   useSortable,
} from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
import SortableUser from "./SortableUser";

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [isLoadingg, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const mouse = useSensor(MouseSensor),
    touch = useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    });
  const sensors = useSensors(mouse, touch);
  const onDragEnd = (e) => {
    const { active, over } = e;
    if (active.id === over.id) {
      return;
    }
    setImages((images) => {
      const oldIndex = images.findIndex((user) => user.id === active.id);
      const newIndex = images.findIndex((user) => user.id === over.id);
      return arrayMove(images, oldIndex, newIndex);
    });
  };
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
    <div>
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoadingg && images.length === 0 && (
        <div className="text-6xl text-center mx-auto mt-32">
          No Images Found
        </div>
      )}
      {isLoadingg ? (
        <div className="text-6xl text-center mx-auto mt-32">Loading..</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={onDragEnd}
          >
            <SortableContext items={images} strategy={rectSortingStrategy}>
              {images.map((image) => (
                <SortableUser key={image.id} image={image} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      )}
    </div>
  );
};
export default HomePage;
