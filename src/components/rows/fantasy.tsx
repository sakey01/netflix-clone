import RowTemplate from "./rowTemplates";

type CategoryItem = {
  endpoint: string;
};

const Fantasy: React.FC<CategoryItem> = ({ endpoint }) => {
  return <RowTemplate category={"Fantasy"} endpoint={endpoint} />;
};

export default Fantasy;
