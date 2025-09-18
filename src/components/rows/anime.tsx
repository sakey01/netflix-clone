import RowTemplate from "./rowTemplates";

type CategoryItem = {
  endpoint: string;
};

const Anime: React.FC<CategoryItem> = ({ endpoint }) => {
  return <RowTemplate category={"Anime"} endpoint={endpoint} />;
};

export default Anime;
