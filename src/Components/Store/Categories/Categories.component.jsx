import "./Categories.style";
import { CategoriesContainer, ItemDirectory } from "./Categories.style";

const Categories = () => {
  const directory = [
    {
      id: 1,
      title: "Bed",
    },
    {
      id: 2,
      title: "Fridge",
    },
    {
      id: 3,
      title: "Dresser",
    },
    {
      id: 4,
      title: "Couch",
    },
    {
      id: 5,
      title: "Table",
    },
  ];

  return (
    <CategoriesContainer>
      {directory.map(({ title, id }) => (
        <ItemDirectory key={id}>{title}</ItemDirectory>
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
