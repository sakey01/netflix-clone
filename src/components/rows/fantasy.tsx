import RowTemplate from "./rowTemplate";

type CategoryItem = {
  endpoint: string;
};

const Fantasy: React.FC<CategoryItem> = ({ endpoint }) => {
  return <RowTemplate category={"Fantasy"} endpoint={endpoint} />;
};

export default Fantasy;
