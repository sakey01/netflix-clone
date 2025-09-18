import RowTemplate from "./rowTemplates";

type CategoryItem = {
  endpoint: string;
};

const TopRated: React.FC<CategoryItem> = ({ endpoint }) => {
  return <RowTemplate category={"Top Rated in the UK"} endpoint={endpoint} />;
};

export default TopRated;
