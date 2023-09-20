import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ImageCard from "./ImageCard";
const SortableUser = ({ image }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: image.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ImageCard image={image} />
    </div>
  );
};
export default SortableUser;
